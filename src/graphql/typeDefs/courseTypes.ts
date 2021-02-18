import gql from "graphql-tag";

const typeDefs = gql`
  type Course {
    id: ID!
    name: String!
    price: Float!
    author: ID!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    courses: [Course!]!
  }
`;

export default typeDefs;
