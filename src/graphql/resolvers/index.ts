import courseResolvers from "./courseResolvers";
import userResolvers from "./userResolvers";

export default {
  Query: {
    ...userResolvers.Query,
    ...courseResolvers.Query,
  },
};
