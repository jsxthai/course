import gql from "graphql-tag";

export default gql`
  type Lecture {
    id: ID!
    text: String!
    courseId: ID!
    content: [LectureContent]
  }

  extend type Query {
    lectures: [Lecture!]!
    lecture(courseId: ID!): [Lecture!]!
  }

  extend type Mutation {
    createLecture(courseId: ID!, text: String!): Response!
    updateLecture(id: ID!, text: String!): Response!
    deleteLecture(id: ID!): Response!
  }
`;
