import { cookies as nextCookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const cookiesList = nextCookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: cookiesList }
    );

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: projects, error: fetchError } = await supabase
      .from('Project')
      .select('*')
      .eq('userId', user.id)
      .order('createdAt', { ascending: false });

    if (fetchError) {
      return NextResponse.json({ error: fetchError.message || 'Failed to fetch projects' }, { status: 500 });
    }

    return NextResponse.json({ projects });
  } catch (err) {
    console.error('❌ Server Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
