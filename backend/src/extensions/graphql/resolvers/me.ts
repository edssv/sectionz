export const me = {
  resolve: async (parent, args, context) => {
    const user = context.state?.user;

    if (!user) {
      throw new Error("Authentication requested");
    }

    const data = await strapi.query("plugin::users-permissions.user").findOne({
      where: {
        id: user.id,
      },
      populate: ["image"],
    });

    return data;
  },
};
