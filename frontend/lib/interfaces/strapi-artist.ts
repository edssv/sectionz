import type { Album } from './album';
import type { StrapiImage } from './strapi-image';
import type { Track } from './strapi-track';

export interface Artist {
  id: number;
  attributes: {
    name: string;
    image: { data: StrapiImage };
    createdAt: string;
    updatedAt: string;
    albums: { data: Album[] };
    tracks: { data: Track[] };
  };
}
