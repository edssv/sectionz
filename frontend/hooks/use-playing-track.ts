import type { TrackFragment } from '@/gql/types';
import usePlayerStore from '@/stores/use-player-store';

export default function usePlayingTrack(): TrackFragment | null {
  return usePlayerStore((state) => {
    if (state.queue.length > 0 && state.queueCursor !== null) {
      return state.queue[state.queueCursor];
    }

    return null;
  });
}
