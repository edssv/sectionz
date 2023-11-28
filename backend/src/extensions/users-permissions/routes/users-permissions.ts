export default {
  routes: [
    {
      method: "GET",
      path: "/auth/emailAvailable",
      handler: "auth.callback",
      config: {
        middlewares: ["plugin::users-permissions.rateLimit"],
        prefix: "",
      },
    },
  ],
};
