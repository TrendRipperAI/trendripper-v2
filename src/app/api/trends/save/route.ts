import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { trendId, source } = await req.json();

    if (!trendId || !source) {
      return NextResponse.json({ error: 'Missing trendId or source' }, { status: 400 });
    }

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get: (key) => cookies().get(key)?.value,
          set: () => {},
          remove: () => {},
        },
      }
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await prisma.savedTrend.create({
      data: {
        userId: user.id,
        trendId,
        source,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('❌ Save failed:', error.message);
    return NextResponse.json({ error: 'Failed to save trend' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { trendId, source } = await req.json();

    if (!trendId || !source) {
      return NextResponse.json({ error: 'Missing trendId or source' }, { status: 400 });
    }

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get: (key) => cookies().get(key)?.value,
          set: () => {},
          remove: () => {},
        },
      }
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await prisma.savedTrend.deleteMany({
      where: {
        userId: user.id,
        trendId,
        source,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('❌ Delete failed:', error.message);
    return NextResponse.json({ error: 'Failed to unsave trend' }, { status: 500 });
  }
}
