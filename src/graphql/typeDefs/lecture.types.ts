import gql from "graphql-tag";

export default gql`
  type Lecture {
    id: ID!
    text: String!
    courseId: ID!
  }

  extend type Query {
    getLecture(courseId: ID!): [Lecture!]!
  }
`;
