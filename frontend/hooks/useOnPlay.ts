import type { Track } from '@/interfaces/strapi-track';

import { usePlayer } from './usePlayer';

export function useOnPlay(tracks: Track[]) {
  const player = usePlayer();

  const onPlay = (id: number) => {
    player.setId(id);
    player.setIds(tracks.map((track) => track.id));
  };

  return onPlay;
}

export default useOnPlay;
