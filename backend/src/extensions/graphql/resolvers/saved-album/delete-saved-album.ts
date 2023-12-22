import { Context } from "koa";
import { errors } from "@strapi/utils";

export const deleteSavedAlbum = {
  resolve: async (_, args, ctx: Context) => {
    const user = ctx.state.user;
    const albumId = args.albumId;

    const album = await strapi.query("api::album.album").findOne({
      where: { id: albumId },
    });

    if (!album) {
      throw new errors.NotFoundError("Трек не найден.");
    }

    const isAlbumSaved = await strapi
      .query("api::saved-album.saved-album")
      .findOne({
        where: { user: { id: user.id }, album: { id: album.id } },
      });

    if (!isAlbumSaved) {
      throw new errors.ValidationError("Альбом не сохранен.");
    }

    await strapi.query("api::saved-album.saved-album").delete({
      where: { user: { id: user.id }, album: { id: album.id } },
    });

    return { isSaved: false };
  },
};
