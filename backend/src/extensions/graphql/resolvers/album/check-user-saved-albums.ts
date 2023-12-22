import { Context } from "koa";

export const checkUserSavedAlbums = {
  resolve: async (parent, args, ctx: Context) => {
    const userId = ctx.state?.user?.id;
    const albumIds = args.albums as number[];

    const user = await strapi.query("plugin::users-permissions.user").findOne({
      where: {
        id: userId,
      },
      populate: ["savedAlbums.album"],
    });

    if (!user?.savedAlbums) {
      return ctx.notFound("Любимые альбомы не найдены");
    }

    const albumsWithSavedStatus = albumIds.map((id) => {
      return {
        isSaved: user.savedAlbums.some(({ album }) => album.id === +id),
      };
    });

    return { albums: albumsWithSavedStatus };
  },
};
