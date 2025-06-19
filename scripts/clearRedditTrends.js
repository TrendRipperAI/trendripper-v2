require('dotenv').config();
const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient();

async function clearTrends() {
  try {
    // Fetch IDs of all RedditTrends that are saved
    const savedTrends = await prisma.savedTrend.findMany({
      select: { redditTrendId: true },
    });

    const savedIds = savedTrends.map((s) => s.redditTrendId);

    // Delete only trends NOT in the saved list
    const result = await prisma.redditTrend.deleteMany({
      where: {
        id: {
          notIn: savedIds,
        },
      },
    });

    console.log(`🧹 Deleted ${result.count} unsaved Reddit trends`);
  } catch (err) {
    console.error('❌ Error clearing trends:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

clearTrends();
