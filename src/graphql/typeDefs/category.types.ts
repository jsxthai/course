import gql from "graphql-tag";

const typeDefs = gql`
  type Category {
    id: ID!
    name: String!
    createdAt: String
    updatedAt: String
    courses: [Course!]!
  }

  extend type Query {
    categories: [Category!]!
    category(id: ID!, name: String): Category!
  }

  extend type Mutation {
    createCategory(name: String!): Response!
    updateCategory(id: ID!, name: String): Response!
    deleteCategory(id: ID!): Response!
  }
`;

export default typeDefs;
