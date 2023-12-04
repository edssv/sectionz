export const updateUserProfile = {
  resolve: async (parent, args, ctx) => {
    const { toEntityResponse } = strapi.service(
      "plugin::graphql.format"
    ).returnTypes;

    if (!ctx.state.isAuthenticated) {
      return null;
    }

    const user = ctx.state.user;

    const newData = args.data;

    // // Make sure there is no duplicate user with the same email
    // if (newData.email) {
    //   const userWithSameEmail = await strapi
    //     .query("plugin::users-permissions.user")
    //     .findOne({ where: { email: newData.email.toLowerCase() } });

    //   if (userWithSameEmail && userWithSameEmail.id != user.id) {
    //     return ctx.badRequest("Email already taken");
    //   }
    //   newData.email = newData.email.toLowerCase();
    // }

    // // Check if user is changing password and make sure passwords match
    // if (newData.password) {
    //   if (!newData.confirmPassword) {
    //     return ctx.badRequest("Missing password confirmation");
    //   } else if (newData.password !== newData.confirmPassword) {
    //     return ctx.badRequest("Passwords don't match");
    //   }
    //   delete newData.confirmPassword;
    // }

    // Reconstruct context so we can pass to the controller
    // ctx.request.body = newData;
    // ctx.params = { id: user.id };

    // Update the user and return the sanitized data

    const response = toEntityResponse(
      await strapi.query("plugin::users-permissions.user").update({
        where: { id: user.id },
        data: newData,
      })
    );

    return response;
  },
};
