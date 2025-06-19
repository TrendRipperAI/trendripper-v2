'use client';

import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/sign-in');
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white hover:text-[#06C19F] transition"
    >
      Logout
    </button>
  );
}
