// This file is now a server component
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import DiscoverClient from './DiscoverClient';

export default async function DiscoverPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user) {
    redirect('/signin');
  }

  return <DiscoverClient userId={session.user.id} />;
}
