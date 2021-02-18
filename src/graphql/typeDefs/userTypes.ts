import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    courses: [Course]
  }

  input RegisterInput {
    name: String!
    password: String!
    email: String!
  }

  type ResponseLogin {
    user: User!
    token: String!
  }

  type ResponseRegister {
    user: User!
    token: String!
  }

  type Query {
    users: [User]!
    user(id: ID!): User!
  }

  type Mutation {
    createUser(registerInput: RegisterInput!): ResponseRegister!
    login(email: String, password: String): ResponseLogin!
  }
`;

export default typeDefs;
