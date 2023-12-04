import type { Artist } from '@/lib/interfaces/strapi-artist';
import type { Track } from '@/lib/interfaces/strapi-track';

export interface GetArtistResponse {
  data: Artist;
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}
export interface GetTracksResponse {
  data: Track[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}
