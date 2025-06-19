// app/api/project/list/route.ts
import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function GET() {
  const cookieStore = cookies();
  const headerStore = headers();

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
        get: (key) => headerStore.get(key) ?? '',
      },
    }
  );

  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: projects, error: fetchError } = await supabase
      .from('Project')
      .select('id, name, description, category, createdAt')
      .eq('userId', user.id)
      .order('createdAt', { ascending: false });

    if (fetchError) throw fetchError;

    return NextResponse.json({ projects });
  } catch (err) {
    console.error('[GET PROJECTS ERROR]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
