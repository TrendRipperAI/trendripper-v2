const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function clearTrends() {
  await prisma.productHuntTrend.deleteMany({});
  console.log('🧹 Cleared all Product Hunt trends');
  await prisma.$disconnect();
}

clearTrends();
