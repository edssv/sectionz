'use client';

import useOnPlay from '@/hooks/useOnPlay';
import { usePlayer } from '@/hooks/usePlayer';
import type { Album } from '@/interfaces/album';

import { Icons } from '../icons';
import { PlayButton } from '../play-button';
import { Button } from '../ui/button';

interface AlbumControlsProps {
  album: Album;
}

export function AlbumControls({ album }: AlbumControlsProps) {
  const onPlay = useOnPlay(album.attributes.tracks.data);
  const player = usePlayer();

  const isPlaying = player.activeAlbumId === album.id && player.isPlaying;

  const handleClickOnPlay = () => {
    player.setIsPlaying(!player.isPlaying);
    player.setActiveAlbumId(album.id);

    onPlay(album.attributes.tracks.data[0].id);
  };

  return (
    <div className='flex items-center gap-3'>
      <PlayButton isPlaying={isPlaying} onClick={handleClickOnPlay}>
        Слушать
      </PlayButton>
      <Button variant='outline'>
        <Icons.listPlus className='mr-2 h-4 w-4' />
        Сохранить в библиотеке
      </Button>
    </div>
  );
}
