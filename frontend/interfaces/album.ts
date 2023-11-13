import type { Image } from "./strapi-image";

export interface Album {
  name: string;
  year: string;
  artist: string;
  genre: string;
  cover:{data: Image}
  tracks: {data: []}
}
