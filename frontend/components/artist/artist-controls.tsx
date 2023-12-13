'use client';

import { useCallback } from 'react';

import type { ArtistFragment, TrackFragment } from '@/gql/types';
import { usePlayerAPI } from '@/stores/use-player-store';

import { Icons } from '../icons';
import { PlayButton } from '../play-button';
import { Button } from '../ui/button';

interface ArtistControlsProps {
  data: { artist: Pick<ArtistFragment['attributes'], 'name'> & Pick<ArtistFragment, 'id'>; tracks: TrackFragment[] };
}

export function ArtistControls({ data }: ArtistControlsProps) {
  const playerAPI = usePlayerAPI();

  // const startPlayback = useCallback(() => {
  //   playerAPI.start(data.tracks, 0);
  // }, [data.tracks, playerAPI]);

  return (
    <div className='flex items-center gap-6'>
      <Button className='rounded-full' size='icon' title={`Слушать исполнителя ${data.artist.name}`}>
        <Icons.play className='h-4 w-4' />
      </Button>
      <Button title={`Подписаться на исполнителя ${data.artist.name}`} variant='outline'>
        Подписаться
      </Button>
    </div>
  );
}
