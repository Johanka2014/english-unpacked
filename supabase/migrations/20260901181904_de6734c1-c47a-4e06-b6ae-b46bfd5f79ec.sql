CREATE TABLE public.activity_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  activity_key text NOT NULL,
  activity_title text NOT NULL,
  activity_type text,
  lesson_slug text,
  lesson_title text,
  score integer NOT NULL CHECK (score >= 0),
  total integer NOT NULL CHECK (total > 0),
  percentage integer NOT NULL CHECK (percentage >= 0 AND percentage <= 100),
  completed_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (student_id, activity_key)
);

GRANT SELECT, INSERT, UPDATE ON public.activity_results TO authenticated;
GRANT ALL ON public.activity_results TO service_role;

ALTER TABLE public.activity_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view their own activity results"
  ON public.activity_results FOR SELECT TO authenticated
  USING (auth.uid() = student_id);

CREATE POLICY "Admins can view all activity results"
  ON public.activity_results FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Students can insert their own activity results"
  ON public.activity_results FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Students can update their own activity results"
  ON public.activity_results FOR UPDATE TO authenticated
  USING (auth.uid() = student_id)
  WITH CHECK (auth.uid() = student_id);

CREATE INDEX idx_activity_results_student_completed
  ON public.activity_results (student_id, completed_at DESC);

CREATE TRIGGER update_activity_results_updated_at
  BEFORE UPDATE ON public.activity_results
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE OR REPLACE FUNCTION public.record_activity_result(
  p_activity_key text,
  p_activity_title text,
  p_activity_type text,
  p_lesson_slug text,
  p_lesson_title text,
  p_score integer,
  p_total integer
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  v_user uuid := auth.uid();
  v_pct integer;
BEGIN
  IF v_user IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  IF p_total IS NULL OR p_total <= 0 OR p_score IS NULL OR p_score < 0 OR p_score > p_total THEN
    RAISE EXCEPTION 'Invalid score';
  END IF;

  IF p_activity_key IS NULL OR length(trim(p_activity_key)) = 0 THEN
    RAISE EXCEPTION 'Missing activity key';
  END IF;

  -- Only students have a profile row; skip silently for accounts without one
  IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = v_user) THEN
    RETURN;
  END IF;

  v_pct := round((p_score::numeric / p_total::numeric) * 100);

  INSERT INTO public.activity_results AS ar (
    student_id, activity_key, activity_title, activity_type,
    lesson_slug, lesson_title, score, total, percentage, completed_at
  )
  VALUES (
    v_user, left(trim(p_activity_key), 200), left(coalesce(p_activity_title, 'Activity'), 300),
    left(coalesce(p_activity_type, ''), 60), left(coalesce(p_lesson_slug, ''), 200),
    left(coalesce(p_lesson_title, ''), 300), p_score, p_total, v_pct, now()
  )
  ON CONFLICT (student_id, activity_key) DO UPDATE
    SET score = EXCLUDED.score,
        total = EXCLUDED.total,
        percentage = EXCLUDED.percentage,
        activity_title = EXCLUDED.activity_title,
        activity_type = EXCLUDED.activity_type,
        lesson_slug = EXCLUDED.lesson_slug,
        lesson_title = EXCLUDED.lesson_title,
        completed_at = EXCLUDED.completed_at
    WHERE EXCLUDED.percentage > ar.percentage;
END;
$function$;

REVOKE EXECUTE ON FUNCTION public.record_activity_result(text, text, text, text, text, integer, integer) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.record_activity_result(text, text, text, text, text, integer, integer) TO authenticated;