import prisma from "../../config/prisma";
import { authJwt } from "./../../utils/authToken";

export default {
  Query: {
    lectures: async (_: any, args: any) => {
      const result = await prisma.lecture.findMany();
      return result;
    },
    lecture: async (_: any, args: any) => {
      const result = await prisma.lecture.findMany({
        where: {
          courseId: Number(args.courseId),
        },
      });
      return result;
    },
  },
  Mutation: {
    createLecture: async (_: any, args: any, context: any) => {
      await authJwt(context);

      try {
        const result = await prisma.lecture.create({
          data: {
            text: args.text,
            courseId: Number(args.courseId),
          },
        });
        if (result) {
          return {
            success: true,
            message: "created lecture",
          };
        }
      } catch (error) {
        return {
          success: false,
          message: error,
        };
      }
    },
    updateLecture: async (_: any, args: any, context: any) => {
      await authJwt(context);

      try {
        const result = await prisma.lecture.update({
          where: {
            id: Number(args.id),
          },
          data: {
            text: args.text,
          },
        });
        if (result)
          return {
            success: true,
            message: "updated lecture ",
          };
      } catch (error) {
        return {
          success: false,
          message: error,
        };
      }
    },
    deleteLecture: async (_: any, args: any, context: any) => {
      await authJwt(context);
      try {
        const result = await prisma.lecture.delete({
          where: {
            id: Number(args.id),
          },
        });
        if (result)
          return {
            sucess: true,
            message: "deleted lecture: " + args.id,
          };
      } catch (error) {
        return {
          success: false,
          message: error,
        };
      }
    },
  },
};
