import type { Track } from '@/interfaces/strapi-track';

import { usePlayer } from './usePlayer';

export function useOnPlay(tracks: Track[]) {
  const player = usePlayer();

  const onPlay = (id: number) => {
    const mainOuter = document.getElementById('main_outer')!;

    player.setId(id);
    player.setIds(tracks.map((track) => track.id));

    if (mainOuter) {
      mainOuter.style.marginBottom = 'var(--player-height)';
    }
  };

  return onPlay;
}

export default useOnPlay;
