import { env } from '@/env.mjs';

import type { GetArtistResponse } from './artist.interface';

export const ArtistService = {
  async getArtist(artistId: number) {
    const res = await fetch(`${env.NEXT_PUBLIC_STRAPI_API_URL}/artists/${artistId}?populate=deep`, {
      headers: {
        Authorization: `bearer ${env.STRAPI_API_TOKEN}`
      },
      next: { revalidate: 3 }
    });
    return res.json() as Promise<GetArtistResponse>;
  }
};
