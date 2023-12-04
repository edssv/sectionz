import { env } from '@/env.mjs';

import type { GetAlbumListResponse, GetAlbumResponse } from './album.interface';

export const AlbumService = {
  async getAlbumList() {
    const res = await fetch(
      `${env.NEXT_PUBLIC_STRAPI_URL}/api/albums?populate=*&filters[album_type]=single&sort[0]=createdAt%3Adesc`,
      {
        headers: {
          Authorization: `bearer ${env.STRAPI_API_TOKEN}`
        },
        next: { revalidate: 3 }
      }
    );
    return res.json() as Promise<GetAlbumListResponse>;
  },
  async getListenNow() {
    const res = await fetch(
      `${env.NEXT_PUBLIC_STRAPI_URL}/api/albums?populate=*&filters[album_type]=album&sort[0]=createdAt%3Adesc`,
      {
        headers: {
          Authorization: `bearer ${env.STRAPI_API_TOKEN}`
        },
        next: { revalidate: 3 }
      }
    );
    return res.json() as Promise<GetAlbumListResponse>;
  },
  async getAlbum(albumId: number) {
    const res = await fetch(`${env.NEXT_PUBLIC_STRAPI_URL}/api/albums/${albumId}?populate=deep`, {
      headers: {
        Authorization: `bearer ${env.STRAPI_API_TOKEN}`
      },
      next: { revalidate: 3 }
    });
    return res.json() as Promise<GetAlbumResponse>;
  }
};
