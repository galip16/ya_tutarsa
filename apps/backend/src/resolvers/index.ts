import {userQuery,matchQuery } from "../queries"
import { userMutation, matchMutation } from "../mutations";

export const resolvers = {
    Query: {
      ...userQuery,
      ...matchQuery
    },
    Mutation: {
      ...userMutation,
      ...matchMutation
    },
};

export default resolvers;
