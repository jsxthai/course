import category from "./category.resolvers";
import course from "./course.resolvers";
import courseDetail from "./courseDetail.resolvers";
import lecture from "./lecture.resolvers";
import lectureContent from "./lectureContent.resolvers";
import user from "./user.resolvers";

export default {
  Query: {
    ...category.Query,
    ...course.Query,
    ...courseDetail.Query,
    ...lecture.Query,
    ...lectureContent.Query,
    ...user.Query,
  },
  Mutation: {
    // ...category.Mutation,
    ...course.Mutation,
    // ...courseDetail.Mutation,
    ...lecture.Mutation,
    ...lectureContent.Mutation,
    ...user.Mutation,
  },
};
