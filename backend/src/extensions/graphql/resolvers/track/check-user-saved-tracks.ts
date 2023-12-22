import { Context } from "koa";

export const checkUserSavedTracks = {
  resolve: async (parent, args, ctx: Context) => {
    const userId = ctx.state?.user?.id;
    const trackIds = args.tracks as number[];

    const user = await strapi.query("plugin::users-permissions.user").findOne({
      where: {
        id: userId,
      },
      populate: ["savedTracks.track"],
    });

    if (!user?.savedTracks) {
      return ctx.notFound("Любимые треки не найдены");
    }

    const tracksWithSavedStatus = trackIds.map((id) => {
      return {
        isSaved: user.savedTracks.some(({ track }) => track.id === +id),
      };
    });

    return { tracks: tracksWithSavedStatus };
  },
};
