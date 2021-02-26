/*
  Warnings:

  - Added the required column `courseId` to the `CourseEnroll` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CourseEnroll" ADD COLUMN     "courseId" INTEGER NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;
