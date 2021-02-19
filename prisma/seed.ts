import { PrismaClient } from "@prisma/client";
import users from "../dummy_data/user";
import categories from "../dummy_data/category";
import courses from "../dummy_data/course";
import courseWhatLearn from "../dummy_data/courseWhatLearn";
import lectures from "../dummy_data/lecture";
import lectureContent from "../dummy_data/lectureContent";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: users,
  });
  await prisma.category.createMany({
    data: categories,
  });
  await prisma.course.createMany({
    data: courses,
  });
  await prisma.lecture.createMany({
    data: lectures,
  });
  await prisma.lectureContent.createMany({
    data: lectureContent,
  });
  await prisma.courseWhatLearn.createMany({
    data: courseWhatLearn,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
