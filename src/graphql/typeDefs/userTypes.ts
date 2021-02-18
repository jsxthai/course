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

  type LoginResponse {
    user: User!
    token: String!
  }

  type CreateUserResponse {
    user: User!
    token: String!
  }

  type DeleteUserResponse {
    success: Boolean!
    message: String!
  }

  type Query {
    users: [User]!
    user(id: ID!): User!
  }

  type Mutation {
    createUser(registerInput: RegisterInput!): CreateUserResponse!
    deleteUser(id: String!): DeleteUserResponse!
    login(email: String, password: String): LoginResponse!
  }
`;

export default typeDefs;
