import type { Track } from '@/lib/types/strapi-track';

export interface GetTrackResponse {
  data: Track;
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}
export interface GetTracksResponse {
  data: Track[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}
