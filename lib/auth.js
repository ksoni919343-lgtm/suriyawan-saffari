import { supabase } from './supabaseClient';

export async function login(email, password) {
  return supabase.auth.signInWithPassword({ email, password });
}
