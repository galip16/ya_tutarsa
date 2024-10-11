import {userQuery} from "../queries"
import { userMutation } from "../mutations";

export const resolvers = {
    Query: {
      ...userQuery,
    },
    Mutation: {
      ...userMutation,
    },
};

export default resolvers;
