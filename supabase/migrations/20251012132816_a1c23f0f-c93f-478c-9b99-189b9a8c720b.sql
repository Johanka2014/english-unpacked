-- Add INSERT policy for users to create their own profile
CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = id);

-- Add INSERT policy for admins to create any profile
CREATE POLICY "Admins can insert any profile" 
ON public.profiles 
FOR INSERT 
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));