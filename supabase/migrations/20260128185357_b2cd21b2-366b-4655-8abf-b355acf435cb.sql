-- Drop the overpermissive policy that allows any authenticated user to read all lessons
DROP POLICY IF EXISTS "Require authentication for lessons access" ON public.lessons;