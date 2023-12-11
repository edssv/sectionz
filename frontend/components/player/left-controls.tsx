/* eslint-disable jsx-a11y/control-has-associated-label */

import type { TrackFragment } from '@/gql/types';
import usePlayingTrackCurrentTime from '@/hooks/use-playing-track-current-time';
import { PlayerStatus } from '@/lib/types/types';
import { parseDuration } from '@/lib/utils';
import usePlayerStore, { usePlayerAPI } from '@/stores/use-player-store';

import { Icons } from '../icons';
import { Button } from '../ui/button';
import { TypographyMuted } from '../ui/typography-muted';

interface LeftControlsProps {
  trackPlaying: TrackFragment;
}

export function LeftControls({ trackPlaying }: LeftControlsProps) {
  const playerAPI = usePlayerAPI();
  const playerStatus = usePlayerStore((state) => state.playerStatus);
  const elapsed = usePlayingTrackCurrentTime();

  const Icon = playerStatus === PlayerStatus.PLAY ? Icons.pause : Icons.play;

  return (
    <div className='-ml-2 flex h-full items-center justify-center gap-3'>
      <Button className='h-10 w-10' size='icon' title='Перемотка назад' variant='ghost' onClick={playerAPI.previous}>
        <Icons.trackPrevious className='h-4 w-4' />
      </Button>
      <Button
        className='h-14 w-14'
        size='icon'
        title={playerStatus === PlayerStatus.PLAY ? 'Пауза' : 'Играть'}
        variant='ghost'
        onClick={playerAPI.playPause}
      >
        <Icon className='h-6 w-6' />
      </Button>
      <Button className='h-10 w-10' size='icon' title='Вперед' variant='ghost' onClick={playerAPI.next}>
        <Icons.trackNext className='h-4 w-4' />
      </Button>
      <TypographyMuted className='text-xs'>
        {parseDuration(elapsed)} / {parseDuration(trackPlaying.attributes.duration)}
      </TypographyMuted>
    </div>
  );
}
