import { cookies as nextCookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const cookieStore = nextCookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: cookieStore,
    }
  );

  try {
    const { name, description, category } = await req.json();

    if (!name || !description || !category) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error('❌ Failed to get Supabase user:', userError);
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('✅ Supabase User ID:', user.id);

    const { data: existingProject, error: fetchError } = await supabase
      .from('Project')
      .select('id')
      .eq('userId', user.id)
      .eq('name', name)
      .eq('description', description)
      .eq('category', category)
      .maybeSingle();

    if (fetchError) {
      console.error('❌ Failed to check existing project:', fetchError);
      return NextResponse.json({ error: fetchError.message }, { status: 500 });
    }

    if (existingProject) {
      console.log('⚠️ Duplicate project found. Skipping insert.');
      return NextResponse.json({ success: true });
    }

    const { error: insertError } = await supabase.from('Project').insert([
      {
        userId: user.id,
        name,
        description,
        category,
      },
    ]);

    if (insertError) {
      console.error('❌ Failed to insert project:', insertError);
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('❌ Server Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
