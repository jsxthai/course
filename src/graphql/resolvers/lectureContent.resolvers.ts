import prisma from "../../config/prisma";

export default {
  Query: {
    getLectureContent: async (_: any, args: any) => {
      const result = await prisma.lectureContent.findMany({
        where: {
          lectureId: Number(args.lectureId),
        },
      });

      return result;
    },
  },
};
