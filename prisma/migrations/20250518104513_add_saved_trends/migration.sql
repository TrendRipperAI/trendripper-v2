-- CreateTable
CREATE TABLE "SavedTrend" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "redditTrendId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavedTrend_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SavedTrend_userId_redditTrendId_key" ON "SavedTrend"("userId", "redditTrendId");

-- AddForeignKey
ALTER TABLE "SavedTrend" ADD CONSTRAINT "SavedTrend_redditTrendId_fkey" FOREIGN KEY ("redditTrendId") REFERENCES "RedditTrend"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
