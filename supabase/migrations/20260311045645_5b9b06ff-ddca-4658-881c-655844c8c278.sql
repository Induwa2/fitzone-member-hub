
-- Fix overly permissive INSERT policy on profiles (only the trigger should insert)
DROP POLICY "System inserts profiles" ON public.profiles;
CREATE POLICY "System inserts profiles" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Fix overly permissive INSERT policy on user_roles
DROP POLICY "System inserts roles" ON public.user_roles;
CREATE POLICY "System inserts roles" ON public.user_roles FOR INSERT WITH CHECK (auth.uid() = user_id);
