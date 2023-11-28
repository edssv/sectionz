'use client';

import useOnPlay from '@/hooks/useOnPlay';
import { usePlayer } from '@/hooks/usePlayer';
import type { Artist } from '@/interfaces/strapi-artist';

import { PlayButton } from '../play-button';
import { Button } from '../ui/button';

interface ArtistControlsProps {
  artist: Artist;
}

export function ArtistControls({ artist }: ArtistControlsProps) {
  const onPlay = useOnPlay(artist.attributes.tracks.data);
  const player = usePlayer();

  const handleClickOnPlay = () => {
    if (player.isPlaying) {
      player.setIsPlaying(false);
    } else player.setIsPlaying(true);

    onPlay(artist.attributes.tracks.data[0].id);
  };

  return (
    <div className='flex gap-3'>
      <PlayButton isPlaying={false} title={`Слушать исполнителя ${artist.attributes.name}`} onClick={handleClickOnPlay}>
        Слушать
      </PlayButton>
      <Button title={`Подписаться на исполнителя ${artist.attributes.name}`} variant='outline'>
        Подписаться
      </Button>
    </div>
  );
}
