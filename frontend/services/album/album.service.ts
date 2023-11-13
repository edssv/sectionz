import { env } from '@/env.mjs';

import type { GetAlbumListResponse } from './album.interface';

export const AlbumService = {
  async getAlbumList() {
    const res = await fetch(
      `${env.NEXT_PUBLIC_STRAPI_API_URL}/albums?populate=*&sort[0]=createdAt%3Adesc`,
      {
        headers: {
          Authorization: `bearer ${env.STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 3 },
      },
    );
    return res.json() as Promise<GetAlbumListResponse>;
  },
};
