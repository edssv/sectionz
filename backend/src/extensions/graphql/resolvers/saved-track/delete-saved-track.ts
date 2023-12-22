import { Context } from "koa";
import { errors } from "@strapi/utils";

export const deleteSavedTrack = {
  resolve: async (_, args, ctx: Context) => {
    const user = ctx.state.user;
    const trackId = args.trackId;

    const track = await strapi.query("api::track.track").findOne({
      where: { id: trackId },
    });

    if (!track) {
      throw new errors.NotFoundError("Трек не найден.");
    }

    const isLikeExist = await strapi
      .query("api::saved-track.saved-track")
      .findOne({
        where: { user: { id: user.id }, track: { id: track.id } },
      });

    if (!isLikeExist) {
      throw new errors.ValidationError("Трек не сохранен.");
    }

    await strapi.query("api::saved-track.saved-track").delete({
      where: { user: { id: user.id }, track: { id: track.id } },
    });

    return { isSaved: false };
  },
};
