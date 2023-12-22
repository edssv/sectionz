'use client';

import type { AlbumFragment } from '@/gql/types';
import LibraryApi from '@/stores/library-api';

import { AlbumSaveButton } from '../album-save-button';
import { Icons } from '../icons';
import { Button } from '../ui/button';

interface AlbumControlsProps {
  data: { album: Pick<AlbumFragment, 'id'> };
  isSaved: boolean;
  isUnauth: boolean;
}

export function AlbumControls({ data, isSaved, isUnauth }: AlbumControlsProps) {
  return (
    <div className='flex items-center gap-3'>
      <Button onClick={() => LibraryApi.Album.play(data.album.id)}>
        <Icons.play className='mr-2 h-3.5 w-3.5' />
        Включить
      </Button>
      <AlbumSaveButton albumId={data.album.id} isSaved={isSaved} isUnauth={isUnauth} variant='outline' />
    </div>
  );
}
