import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { PrismaClient } from '@/generated/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
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
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { productHuntTrendId } = await req.json();

  if (!productHuntTrendId) {
    return NextResponse.json({ success: false, error: 'Missing trend ID' }, { status: 400 });
  }

  try {
    await prisma.savedTrend.create({
      data: {
        userId: user.id,
        source: 'producthunt',
        trendId: productHuntTrendId,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('❌ Failed to save ProductHunt trend:', err.message);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
