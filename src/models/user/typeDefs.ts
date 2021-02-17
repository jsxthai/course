import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    password: String
  }

  type Query {
    hello: String
    thai: String
    users: String
  }

  type Mutation {
    createUser(userId: ID!): User
  }
`;
export default typeDefs;
