import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Fetch the most recent 50 Reddit trends, no filters for now
    const reddit = await prisma.redditTrend.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    // Fetch the most recent 50 Product Hunt trends, no filters for now
    const producthunt = await prisma.productHuntTrend.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    console.log('✅ Reddit count:', reddit.length);
    console.log('✅ ProductHunt count:', producthunt.length);

    // Map Reddit trends to normalized format
    const taggedReddit = reddit.map((trend) => ({
      id: trend.id,
      title: trend.title || 'Untitled',
      description: trend.description || 'No description available.',
      monetizationIdea: trend.monetizationIdea || '',
      rating: trend.rating || 0,
      categories: trend.categories || [],
      createdAt: trend.createdAt || new Date(),
      source: 'reddit',
    }));

    // Map Product Hunt trends to normalized format
    const taggedPH = producthunt.map((trend) => ({
      id: trend.id,
      title: trend.title || 'Untitled',
      description: trend.description || trend.tagline || 'No description available.',
      monetizationIdea: '',
      rating: trend.rating || 0,
      categories: trend.categories || [],
      createdAt: trend.createdAt || new Date(),
      source: 'producthunt',
    }));

    const all = [...taggedReddit, ...taggedPH];

    // Randomize the order of combined trends
    const shuffled = all
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    console.log('[🧠 Trends Returned]:', shuffled.length);
    console.log('[🧠 First Trend]', shuffled[0]);

    return NextResponse.json({ success: true, data: shuffled });
  } catch (err) {
    console.error('❌ Error in /api/trends/all:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to load trends' },
      { status: 500 }
    );
  }
}
