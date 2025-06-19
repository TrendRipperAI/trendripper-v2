import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';
import { mockTrends } from '@/lib/mockTrends';

const prisma = new PrismaClient();
const useMock = process.env.MOCK_TRENDS === 'true';

export async function GET() {
  try {
    if (useMock) {
      console.log('🟡 Using mock trends (MOCK_TRENDS=true)');
      return NextResponse.json({ success: true, data: mockTrends });
    }

    const trends = await prisma.redditTrend.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    return NextResponse.json({ success: true, data: trends });
  } catch (error: any) {
    console.error('❌ Reddit API error:', error.message);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch Reddit trends' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
