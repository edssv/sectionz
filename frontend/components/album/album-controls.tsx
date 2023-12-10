'use client';

import type { GetAlbumQuery } from '@/gql/types';

import { Icons } from '../icons';
import { PlayButton } from '../play-button';
import { Button } from '../ui/button';

type AlbumControlsData = GetAlbumQuery['album']['data'];

interface AlbumControlsProps {
  data: AlbumControlsData;
}

export function AlbumControls({ data }: AlbumControlsProps) {
  // const isPlaying = player.activeAlbumId === data.id && player.isPlaying;

  return (
    <div className='flex items-center gap-3'>
      {/* <PlayButton isPlaying={isPlaying} onClick={() => player.handleToggleAudio(data.attributes.tracks.data)}>
        Слушать
      </PlayButton> */}
      <Button variant='outline'>
        <Icons.listPlus className='mr-2 h-4 w-4' />
        Сохранить в библиотеке
      </Button>
    </div>
  );
}
