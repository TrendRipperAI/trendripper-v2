import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/trends/producthunt

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const trends = await prisma.productHuntTrend.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 50, // Adjust as needed
    });

    return NextResponse.json({ success: true, data: trends });
  } catch (error) {
    console.error('❌ Failed to fetch Product Hunt trends:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch trends' }, { status: 500 });
  }
}
