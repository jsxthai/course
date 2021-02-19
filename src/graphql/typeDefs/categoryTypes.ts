import gql from "graphql-tag";

const typeDefs = gql`
  type Category {
    id: ID!
    name: String!
    createdAt: String
    updatedAt: String
  }

  extend type Query {
    categories: [Category!]!
    category(id: ID!, name: String): Category!
  }
`;

export default typeDefs;
