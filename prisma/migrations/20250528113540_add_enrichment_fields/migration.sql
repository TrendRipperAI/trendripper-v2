-- AlterTable
ALTER TABLE "RedditTrend" 
ADD COLUMN "description" TEXT DEFAULT 'No description available',
ADD COLUMN "rating" INTEGER DEFAULT 0;
