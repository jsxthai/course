import prisma from "../../config/prisma";

export default {
  Query: {
    users: async () => {
      return await prisma.user.findMany();
    },
    user: async (_: any, args: any) => {
      return await prisma.user.findUnique({
        where: {
          id: Number(args.id),
        },
      });
    },
  },
};
