export const trackIncrementPlayCount = {
  resolve: async (parent, args, ctx) => {
    const trackId = args.trackId;

    const track = await strapi.query("api::track.track").findOne({
      where: { id: trackId },
    });

    if (!track) return;

    const newData = await strapi.query("api::track.track").update({
      where: { id: trackId },
      data: { playCount: track.playCount + 1 },
    });

    if (!newData?.playCount) return;

    const response = { playCount: newData.playCount };

    return response;
  },
};
