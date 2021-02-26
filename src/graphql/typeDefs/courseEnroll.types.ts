import gql from "graphql-tag";

const typeDefs = gql`
  type CourseEnroll {
    id: ID
    userId: ID!
    courseId: ID!
  }

  extend type Mutation {
    createCourseEnroll(userId: ID!, courseId: ID!): Response!
    getCourseEnroll(userId: ID!, courseId: ID!): Boolean!
  }
`;

export default typeDefs;
