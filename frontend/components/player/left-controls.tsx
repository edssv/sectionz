/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import type { TrackFragment } from '@/gql/types';
import usePlayingTrack from '@/hooks/use-playing-track';
import usePlayingTrackCurrentTime from '@/hooks/use-playing-track-current-time';
import { PlayerStatus } from '@/lib/types/types';
import { parseDuration } from '@/lib/utils';
import usePlayerStore, { usePlayerAPI } from '@/stores/use-player-store';

import { Icons } from '../icons';
import { Button } from '../ui/button';
import { TypographyMuted } from '../ui/typography-muted';

interface LeftControlsProps {
  duration: TrackFragment['attributes']['duration'] | undefined;
}

export function LeftControls({ duration }: LeftControlsProps) {
  const playerAPI = usePlayerAPI();
  const { playerStatus, queue } = usePlayerStore();
  const elapsed = usePlayingTrackCurrentTime();
  const track = usePlayingTrack();

  const Icon = playerStatus === PlayerStatus.PLAY ? Icons.pause : Icons.play;

  return (
    <div className='-ml-2 flex h-full items-center justify-center gap-3'>
      <Button
        className='h-10 w-10'
        disabled={queue.length === 0}
        size='icon'
        title='Перемотка назад'
        variant='ghost'
        onClick={playerAPI.previous}
      >
        <Icons.trackPrevious className='h-4 w-4 text-muted-foreground' />
      </Button>
      <Button
        className='h-8 w-8 rounded-full bg-foreground text-background'
        disabled={queue.length === 0}
        size='icon'
        title={playerStatus === PlayerStatus.PLAY ? 'Пауза' : 'Играть'}
        variant='none'
        onClick={playerAPI.playPause}
      >
        <Icon className='h-4 w-4' />
      </Button>
      <Button
        className='h-10 w-10'
        disabled={queue.length === 0}
        size='icon'
        title='Вперед'
        variant='ghost'
        onClick={playerAPI.next}
      >
        <Icons.trackNext className='h-4 w-4 text-muted-foreground' />
      </Button>
      <TypographyMuted className='text-xs'>
        {track ? parseDuration(elapsed) : '-:--'} / {parseDuration(duration)}
      </TypographyMuted>
    </div>
  );
}
