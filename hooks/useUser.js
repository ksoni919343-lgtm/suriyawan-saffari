import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function useUser() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const { data } = await supabase.auth.getUser();
    setUser(data.user);
  };

  return { user, fetchUser };
}
