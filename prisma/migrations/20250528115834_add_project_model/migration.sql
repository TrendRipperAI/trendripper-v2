/*
  Warnings:

  - Made the column `description` on table `RedditTrend` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `RedditTrend` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "RedditTrend" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" DROP DEFAULT,
ALTER COLUMN "rating" SET NOT NULL,
ALTER COLUMN "rating" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
