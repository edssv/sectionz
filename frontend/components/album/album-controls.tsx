'use client';

import type { GetAlbumQuery } from '@/gql/types';
import useOnPlay from '@/hooks/use-on-play';
import { usePlayer } from '@/hooks/use-player';

import { Icons } from '../icons';
import { PlayButton } from '../play-button';
import { Button } from '../ui/button';

type AlbumControlsData = GetAlbumQuery['album']['data'];

interface AlbumControlsProps {
  data: AlbumControlsData;
}

export function AlbumControls({ data }: AlbumControlsProps) {
  const onPlay = useOnPlay(data.attributes.tracks.data);
  const player = usePlayer();

  const isPlaying = player.activeAlbumId === data.id && player.isPlaying;

  const handleClickOnPlay = () => {
    player.setIsPlaying(!player.isPlaying);
    player.setActiveAlbumId(data.id);

    onPlay(data.attributes.tracks.data[0].id);
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
