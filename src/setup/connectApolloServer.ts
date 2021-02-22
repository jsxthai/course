import { ApolloServer, IResolvers } from "apollo-server-express";
import { Express } from "express";
import { DocumentNode } from "graphql";

export const startApolloServer = async (
  app: Express,
  typeDefs: string | DocumentNode | DocumentNode[] | string[] | undefined,
  resolvers: IResolvers<any, any> | IResolvers<any, any>[] | undefined
) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    context: ({ req }) => ({ req }),
  });

  server.applyMiddleware({ app });
};
