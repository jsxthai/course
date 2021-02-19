import prisma from "../../config/prisma";

export default {
  Query: {
    getCourseDetail: async (_: any, args: any) => {
      const result = await prisma.courseDetail.findMany({
        where: {
          courseId: Number(args.courseId),
        },
      });

      return result;
    },
  },
};
