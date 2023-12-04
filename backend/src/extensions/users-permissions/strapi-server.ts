export default (plugin) => {
  // plugin.controllers.auth.emailAvailable = async (ctx) => {
  //   const searchParams = ctx.search;
  //   if (!searchParams) return null;
  //   const email = decodeURIComponent(searchParams.split("email=")[1]);
  //   const users = await strapi
  //     .query("plugin::users-permissions.user")
  //     .findMany({
  //       where: {
  //         email: email,
  //       },
  //     });
  //   return users.length === 0;
  // };
  // plugin.controllers.user.updateMe = async (ctx) => {
  //   const user = ctx.state.user;
  //   // User has to be logged in to update themselves
  //   if (!user) {
  //     return ctx.unauthorized();
  //   }
  //   const newData = ctx.request.body;
  //   // Make sure there is no duplicate user with the same email
  //   if (newData.email) {
  //     const userWithSameEmail = await strapi
  //       .query("plugin::users-permissions.user")
  //       .findOne({ where: { email: newData.email.toLowerCase() } });
  //     if (userWithSameEmail && userWithSameEmail.id != user.id) {
  //       return ctx.badRequest("Email already taken");
  //     }
  //     newData.email = newData.email.toLowerCase();
  //   }
  //   // Check if user is changing password and make sure passwords match
  //   if (newData.password) {
  //     if (!newData.confirmPassword) {
  //       return ctx.badRequest("Missing password confirmation");
  //     } else if (newData.password !== newData.confirmPassword) {
  //       return ctx.badRequest("Passwords don't match");
  //     }
  //     delete newData.confirmPassword;
  //   }
  //   // Reconstruct context so we can pass to the controller
  //   ctx.request.body = newData;
  //   ctx.params = { id: user.id };
  //   // Update the user and return the sanitized data
  //   return await await strapi
  //     .query("plugin::users-permissions.user")
  //     .update({ where: { id: ctx.params.id }, data: ctx.request.body });
  // };
  // plugin.routes["content-api"].routes.push({
  //   method: "GET",
  //   path: "/auth/emailAvailable",
  //   handler: "auth.emailAvailable",
  //   config: {
  //     prefix: "",
  //   },
  // });
  // plugin.routes["content-api"].routes.push({
  //   method: "PUT",
  //   path: "/user/me",
  //   handler: "user.updateMe",
  //   config: {
  //     prefix: "",
  //     policies: [],
  //   },
  // });
  return plugin;
};
