/*
  Warnings:

  - You are about to drop the column `userId` on the `Course` table. All the data in the column will be lost.
  - Added the required column `author` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_userId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "userId",
ADD COLUMN     "author" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD FOREIGN KEY ("author") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
