import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    courses: [Course]
  }

  type Query {
    users: [User]!
    user(id: ID!): User!
  }
`;

export default typeDefs;
