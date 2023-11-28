import type { Track } from '@/interfaces/strapi-track';

import { usePlayer } from './usePlayer';

export function useOnPlay(tracks: Track[]) {
  const player = usePlayer();
  const mainOuter = document.getElementById('main_outer')!;

  if (mainOuter) {
    mainOuter.style.marginBottom = 'var(--player-height)';
  }

  const onPlay = (id: number) => {
    player.setId(id);
    player.setIds(tracks.map((track) => track.id));
  };

  return onPlay;
}

export default useOnPlay;
