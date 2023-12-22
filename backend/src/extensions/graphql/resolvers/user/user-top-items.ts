import { Context } from "koa";

export const userTopItems = {
  resolve: async (parent, args, ctx: Context) => {
    const userId = ctx.state?.user?.id;

    const user = await strapi.query("plugin::users-permissions.user").findOne({
      where: {
        id: userId,
      },
      populate: ["following.follow"],
    });

    if (!user?.savedTracks) {
      return ctx.notFound("Любимые треки не найдены");
    }

    return false;
  },
};
