import { env } from '@/env.mjs';

import type { GetTrackResponse } from './track.interface';

export const TrackService = {
  async getTrack(id: number) {
    const res = await fetch(`${env.NEXT_PUBLIC_STRAPI_API_URL}/tracks/${id}?populate=*`, {
      headers: {
        Authorization: `bearer ${env.STRAPI_API_TOKEN}`
      },
      next: { revalidate: 3 }
    });
    return res.json() as Promise<GetTrackResponse>;
  }
};
