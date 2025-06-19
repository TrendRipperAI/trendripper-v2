import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'Missing project ID.' }, { status: 400 });
    }

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get: (key) => cookies().get(key)?.value,
          set: () => {}, // no-op on server
          remove: () => {}, // no-op on server
        },
        headers: {
          get: (key) => headers().get(key) ?? '',
        },
      }
    );

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error('❌ Auth Error:', userError);
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { error: deleteError } = await supabase
      .from('Project')
      .delete()
      .match({ id, userId: user.id }); // cleaner syntax for compound filter

    if (deleteError) {
      console.error('❌ Failed to delete project:', deleteError);
      return NextResponse.json({ error: 'Failed to delete project.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('❌ Server Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
