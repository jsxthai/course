import express from "express";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";
import { startApolloServer } from "./setup/connectApolloServer";

const app = express();

startApolloServer(app, typeDefs, resolvers);
