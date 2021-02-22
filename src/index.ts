import express from "express";
import { PORT } from "./config/env";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";
import { startApolloServer } from "./setup/connectApolloServer";

const app = express();

startApolloServer(app, typeDefs, resolvers);

app.listen(Number(PORT), () => console.log(`🚀 Server ready at port ${PORT}`));
