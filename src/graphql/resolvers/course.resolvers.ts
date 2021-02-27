import { Prisma } from "@prisma/client";
import prisma from "../../config/prisma";
import { authJwt } from "./../../utils/authToken";

export default {
  Query: {
    courses: async () => {
      let result = await prisma.course.findMany({
        include: {
          user: true,
        },
      });
      return result;
    },
    search: async (parent: any, args: any, context: any) => {
      const where: Prisma.CourseWhereInput | undefined = {
        OR: [
          {
            name: {
              contains: args.filter,
              mode: "insensitive", //
            },
          },
          {
            description: {
              contains: args.filter,
              mode: "insensitive", //
            },
          },
        ],
      };
      return await prisma.course.findMany({
        where,
        include: {
          CourseDetail: true,
          lecture: {
            include: {
              content: true,
            },
          },
          categories: true,
          user: true,
        },
      });

      // const count = await prisma.course.count({ where });
    },

    course: async (_: any, args: any) => {
      return await prisma.course.findMany({
        where: {
          id: Number(args.id),
        },
        include: {
          CourseDetail: true,
          lecture: {
            include: {
              content: true,
            },
          },
          categories: true,
          user: true,
        },
      });
    },
  },
  Mutation: {
    createCourse: async (_: any, payload: any) => {
      const { name, price, authorId } = payload.data;

      return await prisma.course.create({
        data: {
          name,
          price,
          authorId: Number(authorId),
        },
      });
    },
    deleteCourse: async (_: any, args: any, context: any) => {
      const payload: { id: number; role: string } | any = await authJwt(
        context
      );
      // TODO cần xử lý:
      // course của user nào thì user đó mới được xóa
      // get id từ payload, payload: đã xác thực jwt và decode
      // get authorId từ course cần xóa
      // case user:
      // if authorId === user id => xóa
      // case admin: role is admin => xóa
      // console.log(payload);

      // ---
      // hiện tại xử lý frontend user chỉ xem đc course của user đó
      // => user chỉ xóa course của mình
      // admin xem đc course nào thì xóa đc course đó
      try {
        const deleteCourse = await prisma.course.delete({
          where: {
            id: Number(args.id),
          },
        });

        if (deleteCourse.id) {
          return {
            success: true,
            message: "delete success",
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
