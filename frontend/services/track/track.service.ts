import { env } from '@/env.mjs';

import type { GetUserResponse } from '../user/user.interface';

import type { GetTrackResponse, GetTracksResponse } from './track.interface';

export const TrackService = {
  async getTrack(id: number) {
    const res = await fetch(`${env.NEXT_PUBLIC_STRAPI_API_URL}/tracks/${id}?populate=*`, {
      headers: {
        Authorization: `bearer ${env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
      },
      next: { revalidate: 3 }
    });
    return res.json() as Promise<GetTrackResponse>;
  },
  async getTracksByAlbum(albumId: number) {
    const res = await fetch(`${env.NEXT_PUBLIC_STRAPI_API_URL}/tracks/?populate=*&filters[album][id]=${albumId}`, {
      headers: {
        Authorization: `bearer ${env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
      },
      next: { revalidate: 3 }
    });
    return res.json() as Promise<GetTracksResponse>;
  },
  async getTracksByArtist(artistId: number) {
    const res = await fetch(`${env.NEXT_PUBLIC_STRAPI_API_URL}/tracks/?populate=*&filters[artist][id]=${artistId}`, {
      headers: {
        Authorization: `bearer ${env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
      },
      next: { revalidate: 3 }
    });
    return res.json() as Promise<GetUserResponse>;
  }
};
