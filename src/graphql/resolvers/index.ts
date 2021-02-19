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
    ...user.Query,
    ...lectureContent.Query,
  },
  Mutation: {
    ...user.Mutation,
  },
};
