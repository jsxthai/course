import prisma from "../../config/prisma";
import { authJwt } from "./../../utils/authToken";

export default {
  Query: {
    lectureContents: async () => {
      const result = await prisma.lectureContent.findMany();

      return result;
    },
    lectureContent: async (_: any, args: any) => {
      const result = await prisma.lectureContent.findMany({
        where: {
          lectureId: Number(args.lectureId),
        },
      });

      return result;
    },
  },
  Mutation: {
    createLectureContent: async (_: any, args: any, context: any) => {
      await authJwt(context);

      const { lectureId, payload } = args;
      const { name, video, document } = payload;

      try {
        const result = await prisma.lectureContent.create({
          data: {
            name,
            video,
            document,
            lectureId: Number(lectureId),
          },
        });

        if (result) {
          return {
            success: true,
            message: "created lecture content name: " + name,
          };
        }
      } catch (error) {
        return {
          success: false,
          message: error,
        };
      }
    },
    updateLectureContent: async (_: any, args: any, context: any) => {
      await authJwt(context);

      const { id, payload } = args;
      // const { name, video, document } = payload;
      try {
        const result = await prisma.lectureContent.update({
          where: {
            id: Number(id),
          },
          data: {
            ...payload,
          },
        });

        if (result) {
          return {
            success: true,
            message: "updated lecture content ",
          };
        }
      } catch (error) {
        return {
          success: false,
          message: error,
        };
      }
    },
    deleteLectureContent: async (_: any, args: any, context: any) => {
      await authJwt(context);

      try {
        const result = await prisma.lectureContent.delete({
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
