import type { Album } from '@/interfaces/album';

export interface GetAlbumListResponse {
  data: Album[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}
export interface GetAlbumResponse {
  data: Album;
}
