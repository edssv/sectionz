'use client';

import type { AlbumFragment } from '@/gql/types';
import AlbumsAPI from '@/stores/albums-api';

import { Icons } from '../icons';
import { PlayButton } from '../play-button';
import { Button } from '../ui/button';

interface AlbumControlsProps {
  data: { album: Pick<AlbumFragment, 'id'> };
}

export function AlbumControls({ data }: AlbumControlsProps) {
  return (
    <div className='flex items-center gap-3'>
      <PlayButton onClick={() => AlbumsAPI.play(data.album.id)}>Слушать</PlayButton>
      <Button variant='outline'>
        <Icons.listPlus className='mr-2 h-4 w-4' />
        Сохранить в библиотеке
      </Button>
    </div>
  );
}
