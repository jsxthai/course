import prisma from "../../config/prisma";

export default {
  Query: {
    getLecture: async (_: any, args: any) => {
      const result = await prisma.lecture.findMany({
        where: {
          courseId: Number(args.courseId),
        },
      });
      return result;
    },
  },
};
