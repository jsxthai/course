import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const user = prisma.user.findMany();
// console.log("user", user);

const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: (_: any, id: any) => {
      return "User";
    },
  },
};

export default resolvers;
