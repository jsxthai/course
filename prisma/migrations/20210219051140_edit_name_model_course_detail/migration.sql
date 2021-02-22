/*
  Warnings:

  - You are about to drop the `CourseWhatLearn` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CourseWhatLearn" DROP CONSTRAINT "CourseWhatLearn_courseId_fkey";

-- CreateTable
CREATE TABLE "CourseDetail" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "CourseWhatLearn";

-- AddForeignKey
ALTER TABLE "CourseDetail" ADD FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
