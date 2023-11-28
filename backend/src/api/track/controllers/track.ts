/**
 * track controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::track.track",
  ({ strapi }) => ({
    async findOne(ctx) {
      const response = await super.findOne(ctx);

      await strapi.query("api::track.track").update({
        where: { id: response.data.id },
        data: {
          plays_number:
            parseInt(response.data.attributes.plays_number || 0) + 1,
        },
      });

      return response;
    },
  })
);
