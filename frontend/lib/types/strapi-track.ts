import type { Album } from './album';
import type { Artist } from './strapi-artist';
import type { Audio } from './strapi-audio';
import type { StrapiImage } from './strapi-image';

export interface Track {
  id: number;
  attributes: {
    name: string;
    artist: { data: Artist };
    genre: string;
    plays_number: number;
    duration_ms: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: { data: StrapiImage };
    audio: { data: Audio };
    album: { data: Album };
  };
}
