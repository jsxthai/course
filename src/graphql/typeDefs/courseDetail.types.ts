import gql from "graphql-tag";

export default gql`
  type CourseDetail {
    id: ID!
    text: String!
    courseId: ID!
  }

  extend type Query {
    courseDetail(courseId: ID!): [CourseDetail!]!
  }

  extend type Mutation {
    createCourseDetail(courseId: ID!, text: String!): Response!
    updateCourseDetail(id: ID!, text: String): Response!
    deleteCourseDetail(id: ID!): Response!
  }
`;
