/*
  Warnings:

  - You are about to drop the column `author` on the `Course` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_author_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "author",
ADD COLUMN     "authorId" INTEGER;

-- AddForeignKey
ALTER TABLE "Course" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
