import gql from "graphql-tag";

const typeDefs = gql`
  type Course {
    id: ID!
    name: String!
    price: Float!
    description: String
    authorId: ID
    createdAt: String!
    updatedAt: String!
    user: User
    lecture: [Lecture]
    CourseDetail: [CourseDetail]
    categories: Category
    image: String
  }

  input CreateCourseInput {
    name: String!
    price: Float
    authorId: ID!
  }

  type SearchResponse {
    courses: [Course!]!
    count: Int!
  }

  extend type Query {
    courses: [Course!]!
    course(id: ID!): [Course!]!
    search(filter: String!): [Course!]!
  }

  extend type Mutation {
    createCourse(data: CreateCourseInput!): Course!
    deleteCourse(id: ID!): Response!
  }
`;

export default typeDefs;
