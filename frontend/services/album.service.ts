import client from '@/apollo/apollo-client';
import { toast } from '@/components/ui/use-toast';
import type {
  CheckUserSavedAlbumsQuery,
  CheckUserSavedAlbumsQueryVariables,
  GetAlbumQuery,
  GetAlbumQueryVariables,
  GetAlbumTracksQuery,
  GetAlbumTracksQueryVariables,
  GetSeveralAlbumsQuery,
  GetSeveralAlbumsQueryVariables,
  GetUserSavedAlbumsQuery,
  RemoveUserSavedAlbumMutation,
  RemoveUserSavedAlbumMutationVariables,
  SaveAlbumForCurrentUserMutation,
  SaveAlbumForCurrentUserMutationVariables
} from '@/gql/types';
import {
  CheckUserSavedAlbumsDocument,
  GetAlbumDocument,
  GetAlbumTracksDocument,
  GetSeveralAlbumsDocument,
  GetUserSavedAlbumsDocument,
  RemoveUserSavedAlbumDocument,
  SaveAlbumForCurrentUserDocument
} from '@/gql/types';
import { getApiUserToken } from '@/lib/session';

type SavedStatus = {
  isSaved: boolean;
};

export const AlbumService = {
  async getAlbum(id: number) {
    return client.query<GetAlbumQuery, GetAlbumQueryVariables>({ query: GetAlbumDocument, variables: { id } });
  },

  async getSeveralAlbums(variables?: GetSeveralAlbumsQueryVariables) {
    return client.query<GetSeveralAlbumsQuery, GetSeveralAlbumsQueryVariables>({
      query: GetSeveralAlbumsDocument,
      variables
    });
  },

  async getAlbumTracks(albumId: number) {
    return client.query<GetAlbumTracksQuery, GetAlbumTracksQueryVariables>({
      query: GetAlbumTracksDocument,
      variables: { albumId }
    });
  },

  async getUserSavedAlbums() {
    return client.query<GetUserSavedAlbumsQuery>({
      query: GetUserSavedAlbumsDocument
    });
  },

  async saveAlbumForCurrentUser(albumId: number): Promise<SavedStatus> {
    const { data } = await client.mutate<SaveAlbumForCurrentUserMutation, SaveAlbumForCurrentUserMutationVariables>({
      mutation: SaveAlbumForCurrentUserDocument,
      variables: { albumId }
    });

    if (!data?.createSavedAlbum) {
      toast({ variant: 'destructive', description: 'Не удалось добавить альбом в библиотеку' });
      return { isSaved: false };
    }

    toast({ description: 'Добавлено в библиотеку' });
    return data.createSavedAlbum;
  },

  async removeUserSavedAlbum(albumId: number): Promise<SavedStatus> {
    const { data } = await client.mutate<RemoveUserSavedAlbumMutation, RemoveUserSavedAlbumMutationVariables>({
      mutation: RemoveUserSavedAlbumDocument,
      variables: { albumId }
    });

    if (!data?.deleteSavedAlbum) {
      toast({ variant: 'destructive', description: 'Не удалось удалить альбом из библиотеки' });
      return { isSaved: true };
    }

    toast({ description: 'Удалено из библиотеки' });
    return data.deleteSavedAlbum;
  },

  async checkUserSavedAlbums(albums: number[], token: string | undefined) {
    const { data } = await client.query<CheckUserSavedAlbumsQuery, CheckUserSavedAlbumsQueryVariables>({
      query: CheckUserSavedAlbumsDocument,
      context: { headers: { authorization: `bearer ${token}` } },
      variables: { albums }
    });

    return data.checkUserSavedAlbums?.albums;
  }
};
