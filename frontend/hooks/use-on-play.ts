import type { TrackFragment } from '@/gql/types';

import { usePlayer } from './use-player';

export function useOnPlay(tracks: TrackFragment[]) {
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
