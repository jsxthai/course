import gql from "graphql-tag";

export default gql`
  type LectureContent {
    id: ID!
    name: String!
    video: String!
    document: String!
    lectureId: ID!
  }
  input LectureContentInput {
    name: String
    video: String
    document: String
  }

  extend type Query {
    lectureContent(lectureId: ID!): [LectureContent!]!
    lectureContents: [LectureContent!]!
  }

  extend type Mutation {
    createLectureContent(
      lectureId: ID!
      payload: LectureContentInput!
    ): Response!
    updateLectureContent(id: ID!, payload: LectureContentInput!): Response!
    deleteLectureContent(id: ID!): Response!
  }
`;
