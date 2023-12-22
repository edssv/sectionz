'use client';

import type { ArtistFragment, TrackFragment } from '@/gql/types';
import LibraryApi from '@/stores/library-api';

import { Icons } from '../icons';
import { Button } from '../ui/button';

import ArtistMoreButton from './artist-more-button';

interface ArtistControlsProps {
  data: { artist: Pick<ArtistFragment['attributes'], 'name'> & Pick<ArtistFragment, 'id'>; tracks: TrackFragment[] };
}

export function ArtistControls({ data }: ArtistControlsProps) {
  return (
    <div className='flex items-center gap-2'>
      <Button title={`Слушать исполнителя ${data.artist.name}`} onClick={() => LibraryApi.Artist.play(data.artist.id)}>
        <Icons.shuffle className='mr-2 h-4 w-4' />
        Перемешать
      </Button>
      <Button title={`Подписаться на исполнителя ${data.artist.name}`} variant='outline'>
        <Icons.follow className='mr-2 h-4 w-4' />
        Подписаться
      </Button>
      <ArtistMoreButton data={{ artist: { name: data.artist.name } }} />
    </div>
  );
}
