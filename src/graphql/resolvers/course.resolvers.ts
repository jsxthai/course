import prisma from "../../config/prisma";

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
    deleteCourse: async (_: any, data: any) => {
      try {
        const deleteCourse = await prisma.course.delete({
          where: {
            id: Number(data.id),
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
