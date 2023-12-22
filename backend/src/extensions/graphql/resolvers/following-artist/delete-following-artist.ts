import { Context } from "koa";
import { errors } from "@strapi/utils";

export const deleteFollowingArtist = {
  resolve: async (_, args, ctx: Context) => {
    const user = ctx.state.user;
    const { artistId } = args;

    const album = await strapi.query("api::artist.artist").findOne({
      where: { id: artistId },
    });

    if (!album) {
      throw new errors.NotFoundError("Артист не найден.");
    }

    const followingArtist = await strapi
      .query("api::following-artist.following-artist")
      .findOne({
        where: { user: { id: user.id }, album: { id: album.id } },
      });

    if (!followingArtist) {
      throw new errors.ValidationError("Вы еще не подписались на автора.");
    }

    await strapi.query("api::following-artist.following-artist").create({
      data: { user: { id: user.id }, album: { id: album.id } },
    });

    return { isFollowed: false };
  },
};
