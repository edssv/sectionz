import { getSession } from 'next-auth/react';

import client from '@/apollo/apollo-client';
import { toast } from '@/components/ui/use-toast';
import type {
  CheckUserSavedTracksQuery,
  CheckUserSavedTracksQueryVariables,
  GetSeveralTracksQuery,
  GetSeveralTracksQueryVariables,
  GetTrackQuery,
  GetTrackQueryVariables,
  GetUserSavedTracksQuery,
  RemoveUserSavedTrackMutation,
  RemoveUserSavedTrackMutationVariables,
  SaveTrackForCurrentUserMutation,
  SaveTrackForCurrentUserMutationVariables
} from '@/gql/types';
import {
  CheckUserSavedTracksDocument,
  GetSeveralTracksDocument,
  GetTrackDocument,
  GetUserSavedTracksDocument,
  RemoveUserSavedTrackDocument,
  SaveTrackForCurrentUserDocument
} from '@/gql/types';

type SavedStatus = {
  isSaved: boolean;
};

export const TrackService = {
  async getTrack(id: number) {
    return client.query<GetTrackQuery, GetTrackQueryVariables>({ query: GetTrackDocument, variables: { id } });
  },

  async getSeveralTracks(variables: GetSeveralTracksQueryVariables) {
    return client.query<GetSeveralTracksQuery, GetSeveralTracksQueryVariables>({
      query: GetSeveralTracksDocument,
      variables
    });
  },

  async getUserSavedTracks(token: string) {
    return client.query<GetUserSavedTracksQuery>({
      query: GetUserSavedTracksDocument,
      context: { headers: { authorization: `bearer ${token}` } }
    });
  },

  async saveTrackForCurrentUser(trackId: number): Promise<SavedStatus> {
    const { data } = await client.mutate<SaveTrackForCurrentUserMutation, SaveTrackForCurrentUserMutationVariables>({
      mutation: SaveTrackForCurrentUserDocument,
      variables: { trackId }
    });

    if (!data?.createSavedTrack) {
      toast({ variant: 'destructive', description: 'Не удалось добавить трек в медиатеку' });
      return { isSaved: false };
    }

    toast({ description: 'Добавлено в плейлист "Любимые треки"' });
    return data.createSavedTrack;
  },

  async removeUserSavedTrack(trackId: number): Promise<SavedStatus> {
    const { data } = await client.mutate<RemoveUserSavedTrackMutation, RemoveUserSavedTrackMutationVariables>({
      mutation: RemoveUserSavedTrackDocument,
      variables: { trackId }
    });

    if (!data?.deleteSavedTrack) {
      toast({ variant: 'destructive', description: 'Не удалось удалить трек из медиатеки' });
      return { isSaved: true };
    }

    toast({ description: 'Удалено из плейлиста "Любимые треки"' });
    return data.deleteSavedTrack;
  },

  async checkUserSavedTracks(tracks: number[]) {
    const session = await getSession();
    if (!session) return null;

    const { data } = await client.query<CheckUserSavedTracksQuery, CheckUserSavedTracksQueryVariables>({
      query: CheckUserSavedTracksDocument,
      variables: { tracks }
    });

    return data.checkUserSavedTracks?.tracks;
  }
};
