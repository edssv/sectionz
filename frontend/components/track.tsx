'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { TrackFragment } from '@/gql/types';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { absoluteUrlStrapi, cn, parseDuration } from '@/lib/utils';

import { PlayButton } from './play-button';
import TrackPlayingIndiator from './track-playing-indiator';
import { TableCell, TableRow } from './ui/table';
import { TypographyMuted } from './ui/typography-muted';

interface TrackProps {
  index: number;
  track: TrackFragment;
  hideArtist?: boolean;
  hideCover?: boolean;
  isCurrentTrack: boolean;
  isPlaying: boolean;
  onClick: (trackId: number) => void;
}

export function Track({
  hideArtist = false,
  hideCover = false,
  index,
  isCurrentTrack,
  isPlaying,
  onClick,
  track
}: TrackProps) {
  return (
    <TableRow key={track.id} className='group'>
      <TableCell className='w-4 text-muted-foreground'>
        {isCurrentTrack && isPlaying ? (
          <TrackPlayingIndiator title='Пауза' />
        ) : (
          <PlayButton
            className='hidden h-8 w-8 rounded-full p-0 group-hover:flex'
            isPlaying={isCurrentTrack && isPlaying}
            size='icon'
            title={`Включить трек "${track.attributes.name}" исполнителя ${track.attributes.artist.data.attributes.name}`}
            variant='link'
            onClick={() => onClick(track.id)}
          />
        )}

        {(!isCurrentTrack || !isPlaying) && (
          <div
            className={cn('flex h-8 w-8 items-center justify-center group-hover:hidden', {
              'text-primary': isCurrentTrack
            })}
          >
            {' '}
            {index + 1}
          </div>
        )}
      </TableCell>
      {!hideCover ? (
        <TableCell className='w-[68px]'>
          <div className='h-10 w-10'>
            <Image
              alt='cover'
              className='h-full w-full object-cover'
              height={40}
              sizes='10vw'
              src={absoluteUrlStrapi(track.attributes.album.data.attributes.cover.data.attributes.url)}
              width={40}
            />
          </div>
        </TableCell>
      ) : null}
      <TableCell className='w-4/12'>
        <div className='flex flex-col'>
          <span className={cn({ 'text-primary': isCurrentTrack })}>{track.attributes.name}</span>
          {!hideArtist ? (
            <Link
              className='text-muted-foreground hover:underline'
              href={getPublicUrl.artist(track.attributes.artist.data.id)}
            >
              {track.attributes.artist.data.attributes.name}
            </Link>
          ) : null}
        </div>
      </TableCell>
      <TableCell className='w-4/12 text-right'>
        <TypographyMuted>
          {track.attributes.playCount <= 100 ? 'менее 100' : track.attributes.playCount}
        </TypographyMuted>
      </TableCell>
      <TableCell className='w-4/12 text-right'>
        <TypographyMuted>{parseDuration(track.attributes.duration)}</TypographyMuted>
      </TableCell>
    </TableRow>
  );
}
