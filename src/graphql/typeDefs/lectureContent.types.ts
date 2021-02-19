import gql from "graphql-tag";

export default gql`
  type LectureContent {
    id: ID!
    name: String!
    video: String!
    document: String!
    lectureId: ID!
  }

  extend type Query {
    getLectureContent(lectureId: ID!): [LectureContent!]!
  }
`;
