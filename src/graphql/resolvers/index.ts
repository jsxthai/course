import courseResolvers from "./courseResolvers";
import userResolvers from "./userResolvers";
import categoryResolvers from "./categoryResolvers";

export default {
  Query: {
    ...userResolvers.Query,
    ...courseResolvers.Query,
    ...categoryResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};
