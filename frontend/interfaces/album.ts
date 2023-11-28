import type { Artist } from './strapi-artist';
import type { StrapiImage } from './strapi-image';
import type { Track } from './strapi-track';

export interface Album {
  id: number;
  attributes: {
    name: string;
    genre: string;
    album_type: 'album' | 'single';
    duration_sec: number;
    release_date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    artist: { data: Artist };
    cover: { data: StrapiImage };
    tracks: { data: Track[] };
  };
}
