'use client';

import Image from 'next/image';

import type { TrackFragment } from '@/gql/types';
import useOnPlay from '@/hooks/use-on-play';
import { usePlayer } from '@/hooks/use-player';
import { absoluteUrlStrapi, convertSecToMinutes } from '@/lib/utils';

import { PlayButton } from './play-button';
import { TableCell, TableRow } from './ui/table';
import { TypographyMuted } from './ui/typography-muted';

interface TrackProps {
  index: number;
  track: TrackFragment;
  hideArtist?: boolean;
  hideCover?: boolean;
}

export function Track({ hideArtist = false, hideCover = false, index, track }: TrackProps) {
  const onPlay = useOnPlay([track]);
  const player = usePlayer();

  const isPlaying = player.activeId === track.id && player.isPlaying;

  const handleClickOnPlay = () => {
    if (track.id === player.activeId) {
      if (player.isPlaying) {
        player.setIsPlaying(false);
      } else player.setIsPlaying(true);
    }

    player.setActiveAlbumId(track.attributes.album.data.id);
    onPlay(track.id);
  };

  return (
    <TableRow key={track.id} className='group'>
      <TableCell className='w-4 text-muted-foreground'>
        <PlayButton
          className='hidden h-8 w-8 rounded-full p-0 group-hover:flex'
          isPlaying={isPlaying}
          size='icon'
          title={`Включить трек "${track.attributes.name}" исполнителя ${track.attributes.artist.data.attributes.name}`}
          variant='outline'
          onClick={handleClickOnPlay}
        />

        <div className='flex h-8 w-8 items-center justify-center group-hover:hidden'> {index + 1}</div>
      </TableCell>
      {!hideCover ? (
        <TableCell className='w-[68px]'>
          <div className='h-10 w-10'>
            <Image
              alt='cover'
              className='h-full w-full object-cover'
              height={40}
              sizes='10vw'
              src={absoluteUrlStrapi(track.attributes.cover.data.attributes.url)}
              width={40}
            />
          </div>
        </TableCell>
      ) : null}
      <TableCell className='w-4/12'>
        <div className='flex flex-col'>
          <span>{track.attributes.name}</span>
          {!hideArtist ? <TypographyMuted>{track.attributes.artist.data.attributes.name}</TypographyMuted> : null}
        </div>
      </TableCell>
      <TableCell className='w-4/12 text-right'>
        <TypographyMuted>
          {track.attributes.plays_number <= 100 ? 'менее 100' : track.attributes.plays_number}
        </TypographyMuted>
      </TableCell>
      <TableCell className='w-4/12 text-right'>
        <TypographyMuted>{convertSecToMinutes(track.attributes.duration_ms, 'track')}</TypographyMuted>
      </TableCell>
    </TableRow>
  );
}
