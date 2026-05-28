
-- 1. Fix user_roles: split ALL policy to prevent self-assignment of admin
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;

CREATE POLICY "Admins can insert roles"
ON public.user_roles FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update roles"
ON public.user_roles FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete roles"
ON public.user_roles FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 2. Scope profiles SELECT policies to authenticated only
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;

CREATE POLICY "Users can view their own profile"
ON public.profiles FOR SELECT TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
ON public.profiles FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can update all profiles"
ON public.profiles FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- 3. Lessons: add WITH CHECK on students update policy to prevent reassignment
DROP POLICY IF EXISTS "Students can update their own lesson notes" ON public.lessons;

CREATE POLICY "Students can update their own lesson notes"
ON public.lessons FOR UPDATE TO authenticated
USING (auth.uid() = student_id)
WITH CHECK (auth.uid() = student_id);

-- Also scope other lessons policies properly
DROP POLICY IF EXISTS "Admins can create lessons" ON public.lessons;
DROP POLICY IF EXISTS "Admins can delete lessons" ON public.lessons;
DROP POLICY IF EXISTS "Admins can update all lessons" ON public.lessons;

CREATE POLICY "Admins can create lessons"
ON public.lessons FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete lessons"
ON public.lessons FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update all lessons"
ON public.lessons FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- 4. Add server-side validation for web_links URL protocols
CREATE OR REPLACE FUNCTION public.validate_web_links()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  link jsonb;
  url_text text;
  links_array jsonb;
BEGIN
  IF NEW.web_links IS NULL THEN
    RETURN NEW;
  END IF;

  -- web_links may be stored as a JSON string or a JSON array
  IF jsonb_typeof(NEW.web_links) = 'string' THEN
    links_array := (NEW.web_links #>> '{}')::jsonb;
  ELSE
    links_array := NEW.web_links;
  END IF;

  IF jsonb_typeof(links_array) <> 'array' THEN
    RETURN NEW;
  END IF;

  FOR link IN SELECT * FROM jsonb_array_elements(links_array)
  LOOP
    url_text := link->>'url';
    IF url_text IS NOT NULL AND url_text <> '' AND
       url_text !~* '^https?://' THEN
      RAISE EXCEPTION 'Invalid URL protocol in web_links: only http(s) URLs are allowed';
    END IF;
  END LOOP;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS validate_lessons_web_links ON public.lessons;
CREATE TRIGGER validate_lessons_web_links
BEFORE INSERT OR UPDATE ON public.lessons
FOR EACH ROW EXECUTE FUNCTION public.validate_web_links();

-- 5. Lock down SECURITY DEFINER helper functions from direct execution
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
-- has_role must remain executable by authenticated since RLS policies invoke it
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC, anon;
