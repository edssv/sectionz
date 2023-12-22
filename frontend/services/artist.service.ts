import client from '@/apollo/apollo-client';
import type {
  GetArtistAlbumsQuery,
  GetArtistAlbumsQueryVariables,
  GetArtistQuery,
  GetArtistQueryVariables,
  GetArtistTopTracksQuery,
  GetArtistTopTracksQueryVariables,
  GetSeveralArtistsQuery,
  GetSeveralArtistsQueryVariables
} from '@/gql/types';
import { GetArtistAlbumsDocument, GetArtistDocument, GetArtistTopTracksDocument } from '@/gql/types';

export const ArtistService = {
  async getArtist(id: number) {
    return client.query<GetArtistQuery, GetArtistQueryVariables>({ query: GetArtistDocument, variables: { id } });
  },

  async getSeveralArtists(variables: GetSeveralArtistsQueryVariables) {
    return client.query<GetSeveralArtistsQuery, GetSeveralArtistsQueryVariables>({
      query: GetArtistDocument,
      variables
    });
  },

  async getArtistAlbums(artistId: number) {
    return client.query<GetArtistAlbumsQuery, GetArtistAlbumsQueryVariables>({
      query: GetArtistAlbumsDocument,
      variables: { artistId }
    });
  },

  async getArtistTopTracks(artistId: number) {
    return client.query<GetArtistTopTracksQuery, GetArtistTopTracksQueryVariables>({
      query: GetArtistTopTracksDocument,
      variables: { artistId }
    });
  }
};
