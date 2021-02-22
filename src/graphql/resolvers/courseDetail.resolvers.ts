import prisma from "../../config/prisma";
import { authJwt } from "../../utils/authToken";

export default {
  Query: {
    courseDetail: async (_: any, args: any) => {
      const result = await prisma.courseDetail.findMany({
        where: {
          courseId: Number(args.courseId),
        },
      });

      return result;
    },
  },
  Mutation: {
    createCourseDetail: async (_: any, args: any, context: any) => {
      await authJwt(context);

      try {
        const result = await prisma.courseDetail.createMany({
          data: {
            text: args.text,
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
    updateCourseDetail: async (_: any, args: any, context: any) => {
      await authJwt(context);
      try {
        const result = await prisma.courseDetail.update({
          where: {
            id: Number(args.id),
          },
          data: {
            text: args.text,
          },
        });

        if (result) {
          return {
            success: true,
            message: "updated",
          };
        }
      } catch (error) {
        return {
          success: false,
          message: error,
        };
      }
    },
    deleteCourseDetail: async (_: any, args: any, context: any) => {
      await authJwt(context);
      try {
        const result = await prisma.courseDetail.delete({
          where: {
            id: Number(args.id),
          },
        });

        if (result) {
          return {
            success: true,
            message: "deleted",
          };
        }
      } catch (error) {
        return {
          success: false,
          message: error,
        };
      }
    },
  },
};
