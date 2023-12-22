export const updateUserNotifications = {
  resolve: async (parent, args, ctx) => {
    const { toEntityResponse } = strapi.service(
      "plugin::graphql.format"
    ).returnTypes;

    if (!ctx.state.isAuthenticated) {
      return null;
    }

    const user = ctx.state.user;
    const newData = args.data;

    const response = toEntityResponse(
      await strapi.query("plugin::users-permissions.user").update({
        where: { id: user.id },
        data: newData,
      })
    );

    return response;
  },
};
