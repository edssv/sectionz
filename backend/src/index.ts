import { typeDefs } from "./extensions/graphql/types/typeDefs";
import { emailAvailable } from "./extensions/graphql/resolvers/email-available";
import { updateUserProfile } from "./extensions/graphql/resolvers/update-user-profile";
import { updateUserNotifications } from "./extensions/graphql/resolvers/update-user-notifications";

export default {
  bootstrap() {},

  register({ strapi }) {
    const extension = ({ strapi }) => ({
      typeDefs: typeDefs,
      resolvers: {
        Query: {
          emailAvailable,
        },
        Mutation: {
          updateUserProfile,
          updateUserNotifications,
        },
      },
      resolversConfig: {
        "Query.emailAvailable": {
          auth: false,
        },
      },
    });

    strapi.plugin("graphql").service("extension").use(extension);
  },
};
