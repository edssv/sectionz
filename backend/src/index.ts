import { typeDefs } from "./extensions/graphql/types/typeDefs";
import { emailAvailable } from "./extensions/graphql/resolvers/auth/email-available";
import { updateUserProfile } from "./extensions/graphql/resolvers/user/update-user-profile";
import { updateUserNotifications } from "./extensions/graphql/resolvers/user/update-user-notifications";
import { trackIncrementPlayCount } from "./extensions/graphql/resolvers/track/track-increment-play-count";
import { me } from "./extensions/graphql/resolvers/auth/me";
import { getAudioMetadata } from "./lib/utils";
import { Strapi } from "@strapi/strapi";
import { createFollowingArtist } from "./extensions/graphql/resolvers/following-artist/create-following-artist";
import { deleteFollowingArtist } from "./extensions/graphql/resolvers/following-artist/delete-following-artist";
import { createSavedTrack } from "./extensions/graphql/resolvers/saved-track/create-saved-track";
import { createSavedAlbum } from "./extensions/graphql/resolvers/saved-album/create-saved-album";
import { deleteSavedTrack } from "./extensions/graphql/resolvers/saved-track/delete-saved-track";
import { deleteSavedAlbum } from "./extensions/graphql/resolvers/saved-album/delete-saved-album";
import { checkUserSavedTracks } from "./extensions/graphql/resolvers/track/check-user-saved-tracks";
import { checkUserSavedAlbums } from "./extensions/graphql/resolvers/album/check-user-saved-albums";
import { userTopItems } from "./extensions/graphql/resolvers/user/user-top-items";

export default {
  bootstrap({ strapi }: { strapi: Strapi }) {
    strapi.db.lifecycles.subscribe(async (event) => {
      if (event.model.singularName === "album") {
        if (
          event.action === "beforeUpdate" ||
          event.action === "beforeCreate"
        ) {
          const albumId = event.params.data.id;

          if (!albumId) return;

          const album = await strapi.query("api::album.album").findOne({
            where: { id: albumId },
            populate: ["tracks"],
          });

          if (!album) return;

          const tracks = album.tracks;

          if (!tracks) return;

          const duration = tracks.reduce(
            (acc, current) => acc + current.duration,
            0
          );

          event.params.data.duration = duration;
        }
      }

      if (event.action === "beforeCreate") {
        if (event.model.singularName === "track") {
          const audioId = event.params.data.audio;

          if (audioId) {
            const audio = await strapi.query("plugin::upload.file").findOne({
              where: { id: audioId },
            });

            if (!audio) return;

            const audioMetadata = await getAudioMetadata(
              `${process.env.URL}${audio.url}`
            );

            event.params.data.duration = audioMetadata.format.duration;
          }
        }
      }
    });
  },

  register({ strapi }: { strapi: Strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");

    extensionService
      .shadowCRUD("api::following-artist.following-artist")
      .disableMutations();
    extensionService
      .shadowCRUD("api::saved-album.saved-album")
      .disableMutations();
    extensionService
      .shadowCRUD("api::saved-track.saved-track")
      .disableMutations();
    extensionService.shadowCRUD("api::artist.artist").disableMutations();

    const extension = ({ strapi }: { strapi: Strapi }) => ({
      typeDefs: typeDefs,
      resolvers: {
        Query: {
          checkUserSavedAlbums,
          checkUserSavedTracks,
          emailAvailable,
          me,
          trackIncrementPlayCount,
          userTopItems,
        },
        Mutation: {
          createFollowingArtist,
          createSavedAlbum,
          createSavedTrack,
          deleteFollowingArtist,
          deleteSavedAlbum,
          deleteSavedTrack,
          updateUserProfile,
          updateUserNotifications,
        },
      },
      resolversConfig: {
        "Query.emailAvailable": {
          auth: false,
        },
        "Query.trackIncrementPlayCount": {
          auth: false,
        },
      },
    });

    strapi.plugin("graphql").service("extension").use(extension);
  },
};
