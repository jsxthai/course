import gql from "graphql-tag";

export default gql`
  type CourseDetail {
    id: ID!
    text: String!
    courseId: ID!
  }

  extend type Query {
    getCourseDetail(courseId: ID!): [CourseDetail!]!
  }
`;
