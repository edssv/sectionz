export default (plugin) => {
  plugin.controllers.auth.emailAvailable = async (ctx) => {
    const searchParams = ctx.search;

    if (!searchParams) return null;

    const email = decodeURIComponent(searchParams.split("email=")[1]);
    const users = await strapi
      .query("plugin::users-permissions.user")
      .findMany({
        where: {
          email: email,
        },
      });

    return users.length === 0;
  };

  plugin.routes["content-api"].routes.push({
    method: "GET",
    path: "/auth/emailAvailable",
    handler: "auth.emailAvailable",
    config: {
      prefix: "",
    },
  });

  return plugin;
};
