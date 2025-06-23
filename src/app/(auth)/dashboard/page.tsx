'use client';

import DashboardClient from './DashboardClient';
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';

export default async function DashboardPage() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: () => cookieStore,
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return (
      <div className="text-white p-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Please log in</h1>
        <p>You must be logged in to view the dashboard.</p>
      </div>
    );
  }

  const { data: user } = await supabase
    .from('User')
    .select('accountTier')
    .eq('id', session.user.id)
    .single();

  return (
    <DashboardClient
      userId={session.user.id}
      accountTier={user?.accountTier || 'free'}
      projects={[]} // Projects loaded client-side
    />
  );
}
