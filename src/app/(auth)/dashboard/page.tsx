import { createServerClient } from '@supabase/ssr';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import DashboardClient from './DashboardClient';

export default async function DashboardPage() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key) => cookieStore.get(key)?.value,
        set: () => {},
        remove: () => {},
      },
      headers: {
        get: (key) => headers().get(key) ?? '',
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  const { data: projects, error } = await supabase
    .from('Project')
    .select('*')
    .order('createdAt', { ascending: false });

  return (
    <DashboardClient
      userId={user.id}
      accountTier={user.user_metadata?.account_tier ?? 'unknown'}
      projects={projects || []}
    />
  );
}
