import type { Artist } from '@/interfaces/strapi-artist';
import type { Track } from '@/interfaces/strapi-track';

export interface GetArtistResponse {
  data: Artist;
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}
export interface GetTracksResponse {
  data: Track[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}
