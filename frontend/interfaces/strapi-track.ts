import type { Album } from './album';
import type { Audio } from './strapi-audio';
import type { Image } from './strapi-image';

export interface Track {
  id: number;
  attributes: {
    name: string;
    artist: string;
    genre: string;
    year: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: { data: Image };
    audio: { data: Audio };
    album: { data: Album };
  };
}
