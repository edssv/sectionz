import client from '@/apollo/apollo-client';
import { toast } from '@/components/ui/use-toast';
import type {
  FollowArtistMutation,
  FollowArtistMutationVariables,
  GetCurrentUserProfileQuery,
  GetUserTopItemsQuery,
  UnfollowArtistMutation,
  UnfollowArtistMutationVariables
} from '@/gql/types';
import {
  FollowArtistDocument,
  GetCurrentUserProfileDocument,
  GetUserTopItemsDocument,
  UnfollowArtistDocument
} from '@/gql/types';

type FollowedStatus = {
  isFollowed: boolean;
};

export const UserService = {
  async getCurrentUserProfile(token: string) {
    return client.query<GetCurrentUserProfileQuery>({
      query: GetCurrentUserProfileDocument,
      context: { headers: { authorization: `bearer ${token}` } }
    });
  },

  async getUserTopItems(token: string) {
    return client.query<GetUserTopItemsQuery>({
      query: GetUserTopItemsDocument,
      context: { headers: { authorization: `bearer ${token}` } }
    });
  },

  async followArtist(artistId: number): Promise<FollowedStatus> {
    const { data } = await client.mutate<FollowArtistMutation, FollowArtistMutationVariables>({
      mutation: FollowArtistDocument,
      variables: { artistId }
    });

    if (!data?.createFollowingArtist) {
      toast({ variant: 'destructive', description: 'Не удалось добавить в библиотеку.' });
      return { isFollowed: false };
    }

    toast({ description: 'Добавлено в библиотеку' });
    return data.createFollowingArtist;
  },

  async unfollowArtist(artistId: number): Promise<FollowedStatus> {
    const { data } = await client.mutate<UnfollowArtistMutation, UnfollowArtistMutationVariables>({
      mutation: UnfollowArtistDocument,
      variables: { artistId }
    });

    if (!data?.deleteFollowingArtist) {
      toast({ variant: 'destructive', description: 'Не удалось удалить из библиотеки.' });
      return { isFollowed: false };
    }

    toast({ description: 'Удалено из библиотеки' });
    return data.deleteFollowingArtist;
  }
};
