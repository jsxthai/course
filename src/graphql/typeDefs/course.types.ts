import gql from "graphql-tag";

const typeDefs = gql`
  type Course {
    id: ID!
    name: String!
    price: Float!
    authorId: ID
    createdAt: String!
    updatedAt: String!
  }

  input CreateCourseInput {
    name: String!
    price: Float
    authorId: ID!
  }

  extend type Query {
    courses: [Course!]!
  }

  extend type Mutation {
    createCourse(data: CreateCourseInput!): Course!
    deleteCourse(id: ID!): Response!
  }
`;

export default typeDefs;
