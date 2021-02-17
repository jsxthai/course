import { ApolloServer } from "apollo-server-express";
import { Express } from "express";

// app imports
export const startApolloServer = async (
  app: Express,
  schemaGraphql: object
) => {
  const server = new ApolloServer(schemaGraphql);

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};
