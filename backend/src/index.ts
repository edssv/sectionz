import { typeDefs } from "./extensions/graphql/types/typeDefs";
import { emailAvailable } from "./extensions/graphql/resolvers/email-available";
import { updateUserProfile } from "./extensions/graphql/resolvers/update-user-profile";
import { updateUserNotifications } from "./extensions/graphql/resolvers/update-user-notifications";
import { trackIncrementPlayCount } from "./extensions/graphql/resolvers/track-increment-play-count";
import { me } from "./extensions/graphql/resolvers/me";
import { getAudioMetadata } from "./lib/utils";
import { Strapi } from "@strapi/strapi";

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

          event.params.data.duration = 5000;
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
    const extension = ({ strapi }: { strapi: Strapi }) => ({
      typeDefs: typeDefs,
      resolvers: {
        Query: {
          emailAvailable,
          me,
          trackIncrementPlayCount,
        },
        Mutation: {
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
