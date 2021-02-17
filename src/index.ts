import express from "express";
import { startApolloServer } from "./setup/startApolloServer";
import schemaGraphql from "./setup/schemaGraphql";

const app = express();

// start apollo server with express app
startApolloServer(app, schemaGraphql);
