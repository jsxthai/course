import prisma from "../../config/prisma";
import { authJwt } from "./../../utils/authToken";

export default {
  Query: {
    courses: async () => {
      return await prisma.course.findMany();
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
