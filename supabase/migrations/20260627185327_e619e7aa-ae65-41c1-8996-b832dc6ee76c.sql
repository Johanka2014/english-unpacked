DROP POLICY IF EXISTS "Students can update their own lesson notes" ON public.lessons;

CREATE OR REPLACE FUNCTION public.update_my_lesson(
  p_lesson_id uuid,
  p_teacher_notes text,
  p_web_links jsonb
) RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  link jsonb;
  url_text text;
  links_array jsonb;
BEGIN
  -- Validate web_links URLs (same logic as validate_web_links trigger)
  IF p_web_links IS NOT NULL THEN
    IF jsonb_typeof(p_web_links) = 'string' THEN
      links_array := (p_web_links #>> '{}')::jsonb;
    ELSE
      links_array := p_web_links;
    END IF;

    IF jsonb_typeof(links_array) = 'array' THEN
      FOR link IN SELECT * FROM jsonb_array_elements(links_array)
      LOOP
        url_text := link->>'url';
        IF url_text IS NOT NULL AND url_text <> '' AND url_text !~* '^https?://' THEN
          RAISE EXCEPTION 'Invalid URL protocol in web_links: only http(s) URLs are allowed';
        END IF;
      END LOOP;
    END IF;
  END IF;

  UPDATE public.lessons
  SET teacher_notes = p_teacher_notes,
      web_links = p_web_links,
      updated_at = now()
  WHERE id = p_lesson_id
    AND student_id = auth.uid();

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Lesson not found or you do not have permission to update it';
  END IF;
END;
$$;

REVOKE ALL ON FUNCTION public.update_my_lesson(uuid, text, jsonb) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.update_my_lesson(uuid, text, jsonb) TO authenticated;