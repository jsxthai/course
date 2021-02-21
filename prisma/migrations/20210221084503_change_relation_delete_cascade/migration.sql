-- AlterTable
ALTER TABLE "CourseDetail" ALTER COLUMN "courseId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Lecture" ALTER COLUMN "courseId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "LectureContent" ALTER COLUMN "lectureId" DROP NOT NULL;
