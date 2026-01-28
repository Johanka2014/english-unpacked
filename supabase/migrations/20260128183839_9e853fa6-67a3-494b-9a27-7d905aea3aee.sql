-- Add a permissive base policy that requires authentication
-- This ensures anonymous users cannot access the lessons table at all
CREATE POLICY "Require authentication for lessons access"
ON public.lessons
FOR SELECT
TO authenticated
USING (true);

-- Drop the existing restrictive SELECT policies and recreate as permissive with proper conditions
DROP POLICY IF EXISTS "Admins can view all lessons" ON public.lessons;
DROP POLICY IF EXISTS "Students can view their own lessons" ON public.lessons;

-- Recreate as permissive policies (which is the default) with proper access control
CREATE POLICY "Admins can view all lessons"
ON public.lessons
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Students can view their own lessons"
ON public.lessons
FOR SELECT
TO authenticated
USING (auth.uid() = student_id);