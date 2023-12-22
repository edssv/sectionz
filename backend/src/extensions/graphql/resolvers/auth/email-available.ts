export const emailAvailable = {
  resolve: async (parent, args, context) => {
    const users = await strapi
      .query("plugin::users-permissions.user")
      .findMany({
        where: {
          email: args.email,
        },
      });

    return users.length === 0;
  },
};
