import { authJwt } from "./../../utils/authToken";
import prisma from "../../config/prisma";

export default {
  Query: {
    categories: async () => {
      return prisma.category.findMany();
    },
    category: async (_: any, args: any) => {
      return prisma.category.findUnique({
        where: {
          id: Number(args.id),
        },
      });
    },
  },
  Mutation: {
    createCategory: async (_: any, args: any, context: any) => {
      await authJwt(context);

      try {
        const result = await prisma.category.create({
          data: {
            name: args.name,
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
    updateCategory: async (_: any, args: any, context: any) => {
      await authJwt(context);
      try {
        const result = await prisma.category.update({
          where: {
            id: Number(args.id),
          },
          data: {
            name: args.name,
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
    deleteCategory: async (_: any, args: any, context: any) => {
      await authJwt(context);
      try {
        const result = await prisma.category.delete({
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
