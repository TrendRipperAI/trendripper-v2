-- CreateTable
CREATE TABLE "RedditTrend" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subreddit" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RedditTrend_pkey" PRIMARY KEY ("id")
);
