import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    courses: [Course]
    role: String!
    createdAt: String
    updatedAt: String
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

  type Response {
    success: Boolean!
    message: String!
  }

  type Query {
    users: [User]!
    user(id: ID!): User!
  }

  type Mutation {
    createUser(registerInput: RegisterInput!): CreateUserResponse!
    deleteUser(id: String!): Response!
    updatePassword(oldPassword: String!, newPassword: String!): Response!
    login(email: String!, password: String!): LoginResponse!
    loginWithJWT: LoginResponse!
  }
`;

export default typeDefs;
