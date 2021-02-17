import { PrismaClient } from "@prisma/client";
import users from "../db-dummy/user";
import categories from "../db-dummy/category";
import courses from "../db-dummy/course";

const prisma = new PrismaClient();

async function main() {
  for (let user of users) {
    await prisma.user.create({
      data: user,
    });
  }
  for (let category of categories) {
    await prisma.category.create({
      data: category,
    });
  }
  for (let course of courses) {
    await prisma.course.create({
      data: course,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
