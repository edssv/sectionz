import client from '@/apollo/apollo-client';
import { toast } from '@/components/ui/use-toast';
import type { AlbumTrackListQuery, AlbumTrackListQueryVariables } from '@/gql/types';
import { AlbumTrackListDocument } from '@/gql/types';

import usePlayerStore from './use-player-store';

/**
 * Start playing album
 */
const play = async (albumId: number): Promise<void> => {
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
};

const AlbumsAPI = {
  play
};

export default AlbumsAPI;
