import prisma from "../../config/prisma";
import { authJwt } from "../../utils/authToken";

export default {
  Mutation: {
    createCourseEnroll: async (_: any, args: any, context: any) => {
      await authJwt(context);
      try {
        const result = await prisma.courseEnroll.createMany({
          data: {
            userId: Number(args.userId),
            courseId: Number(args.courseId),
          },
        });

        if (result) {
          return {
            success: true,
            message: "created",
          };
        }
      } catch (error) {
        return {
          success: false,
          message: error,
        };
      }
    },
    getCourseEnroll: async (_: any, args: any, context: any) => {
      await authJwt(context);
      try {
        const result = await prisma.courseEnroll.findMany({
          where: {
            userId: Number(args.userId),
            courseId: Number(args.courseId),
          },
        });

        if (result.length > 0) {
          // console.log(result);
          return true;
        } else {
          return false;
        }
      } catch (error) {
        return false;
      }
    },
  },
};
