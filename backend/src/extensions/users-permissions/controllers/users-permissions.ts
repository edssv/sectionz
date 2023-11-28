import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "plugin::users-permissions.user",
  ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async checkEmail(ctx) {
      try {
        ctx.body = "ok";
      } catch (err) {
        ctx.body = err;
      }
    },
  })
);
