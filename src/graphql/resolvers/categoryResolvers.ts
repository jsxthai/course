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
};
