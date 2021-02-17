import { ApolloServer, IResolvers } from "apollo-server-express";
import { Express } from "express";
import { DocumentNode } from "graphql";
import { PORT } from "../config/env";

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
  });

  server.applyMiddleware({ app });

  app.listen(PORT, () =>
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  );
};
