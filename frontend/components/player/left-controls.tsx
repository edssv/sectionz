/* eslint-disable jsx-a11y/control-has-associated-label */

import type { TrackFragment } from '@/gql/types';
import usePlayingTrackCurrentTime from '@/hooks/use-playing-track-current-time';
import { PlayerStatus } from '@/lib/types/types';
import { parseDuration } from '@/lib/utils';
import usePlayerStore, { usePlayerAPI } from '@/stores/use-player-store';

import { Icons } from '../icons';
import { TypographyMuted } from '../ui/typography-muted';

interface LeftControlsProps {
  trackPlaying: TrackFragment;
}

export function LeftControls({ trackPlaying }: LeftControlsProps) {
  const playerAPI = usePlayerAPI();
  const playerStatus = usePlayerStore((state) => state.playerStatus);
  const elapsed = usePlayingTrackCurrentTime();

  const Icon = playerStatus === PlayerStatus.PLAY ? Icons.playerPause : Icons.playerPlay;

  return (
    <div className='-ml-2 flex h-full items-center justify-center gap-3'>
      <button
        className='flex h-10 w-10 cursor-pointer select-none items-center justify-center opacity-80 hover:opacity-100'
        title='Перемотка назад'
        onClick={playerAPI.previous}
      >
        <Icons.trackPrevious className='h-4 w-4' />
      </button>
      <button
        className='flex h-14 w-14 cursor-pointer select-none items-center justify-center opacity-80 hover:opacity-100'
        title={playerStatus === PlayerStatus.PLAY ? 'Пауза' : 'Играть'}
        onClick={playerAPI.playPause}
      >
        <Icon className='h-6 w-6' />
      </button>
      <button
        className='flex h-10 w-10 cursor-pointer select-none items-center justify-center opacity-80 hover:opacity-100'
        title='Вперед'
        onClick={playerAPI.next}
      >
        <Icons.trackNext className='h-4 w-4' />
      </button>
      <TypographyMuted className='text-xs'>
        {parseDuration(elapsed)} / {parseDuration(trackPlaying.attributes.duration)}
      </TypographyMuted>
    </div>
  );
}
