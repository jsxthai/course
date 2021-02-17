import { merge } from "lodash";
import { userTypeDefs, userResolvers } from "../models/user";

const schema = {
  typeDefs: [userTypeDefs],
  resolvers: merge({}, userResolvers),
};

export default schema;
