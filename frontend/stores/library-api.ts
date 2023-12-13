import client from '@/apollo/apollo-client';
import { toast } from '@/components/ui/use-toast';
import type {
  AlbumTrackListQuery,
  AlbumTrackListQueryVariables,
  ArtistPopularTrackListQuery,
  ArtistPopularTrackListQueryVariables
} from '@/gql/types';
import { AlbumTrackListDocument, ArtistPopularTrackListDocument } from '@/gql/types';

import usePlayerStore from './use-player-store';

const Album = {
  /**
   * Start playing album
   */
  async play(albumId: number): Promise<void> {
    try {
      const { data } = await client.query<AlbumTrackListQuery, AlbumTrackListQueryVariables>({
        query: AlbumTrackListDocument,
        variables: { albumId }
      });

      const tracks = data.album.data.attributes.tracks.data;

      usePlayerStore.getState().api.start(tracks);
    } catch (error) {
      toast({ variant: 'destructive', description: 'Не удалось воспроизвести альбом' });
    }
  }
};

const Artist = {
  /**
   * Start playing artist tracks
   */
  async play(artistId: number): Promise<void> {
    try {
      const { data } = await client.query<ArtistPopularTrackListQuery, ArtistPopularTrackListQueryVariables>({
        query: ArtistPopularTrackListDocument,
        variables: { artistId }
      });

      const tracks = data.popularTracks.data;

      usePlayerStore.getState().api.start(tracks);
    } catch (error) {
      toast({ variant: 'destructive', description: 'Не удалось воспроизвести треки исполнителя' });
    }
  }
};

const LibraryApi = {
  Album,
  Artist
};

export default LibraryApi;
