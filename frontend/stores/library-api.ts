import { toast } from '@/components/ui/use-toast';
import { AlbumService } from '@/services/album.service';

import usePlayerStore from './use-player-store';

const Album = {
  async play(albumId: number): Promise<void> {
    try {
      const { data } = await AlbumService.getAlbumTracks(albumId);

      usePlayerStore.getState().api.start(data.album.data.attributes.tracks.data);
    } catch (error) {
      toast({ variant: 'destructive', description: 'Не удалось воспроизвести альбом' });
    }
  }
};

const Artist = {
  play(tracks: []): void {
    try {
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
