export const emailAvailable = {
  resolve: async (parent, args, context) => {
    const { toEntityResponse } = strapi.service(
      "plugin::graphql.format"
    ).returnTypes;

    const users = await strapi
      .query("plugin::users-permissions.user")
      .findMany({
        where: {
          email: args.email,
        },
      });

    const response = toEntityResponse(users.length === 0);

    return users.length === 0;
  },
};
