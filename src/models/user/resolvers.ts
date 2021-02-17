const resolvers = {
  Query: {
    hello() {
      return "helo";
    },
    thai: () => "pham quoc thai",
    users: () => {
      return "all users";
    },
  },
  Mutation: {
    createUser: (_: any, id: any) => {
      return "User";
    },
  },
};

export default resolvers;
