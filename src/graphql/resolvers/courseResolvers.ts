import prisma from "../../config/prisma";

export default {
  Query: {
    courses: async () => {
      return await prisma.course.findMany();
    },
  },
};
