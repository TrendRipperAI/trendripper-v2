import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }

    const saved = await prisma.savedTrend.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    // Dynamically fetch the correct trend data based on source
    const trends = await Promise.all(
      saved.map(async (s) => {
        if (s.source === 'reddit') {
          const trend = await prisma.redditTrend.findUnique({ where: { id: s.trendId } });
          return trend ? { ...trend, source: 'reddit' } : null;
        }

        if (s.source === 'producthunt') {
          const trend = await prisma.productHuntTrend.findUnique({ where: { id: s.trendId } });
          return trend ? { ...trend, source: 'producthunt' } : null;
        }

        return null;
      })
    );

    const filtered = trends.filter((t) => t !== null);

    return NextResponse.json({ success: true, data: filtered });
  } catch (error: any) {
    console.error('❌ Fetch saved trends failed:', error.message);
    return NextResponse.json({ error: 'Failed to fetch saved trends' }, { status: 500 });
  }
}
