import type { Album } from '@/interfaces/album';

export interface GetAlbumListResponse {
  data: {id: number, attributes: Album}[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}
