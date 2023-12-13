'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { TrackFragment } from '@/gql/types';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { absoluteUrlStrapi, cn, parseDuration } from '@/lib/utils';

import { Icons } from './icons';
import { LikeButton } from './like-button';
import { TrackListCell, TrackListRow } from './track-list';
import TrackPlayButton from './track-play-button';
import { Button } from './ui/button';

interface TrackProps {
  children: React.ReactNode;
  index: number;
  track: TrackFragment;
  hideArtist?: boolean;
  hideCover?: boolean;
  isCurrentTrack: boolean;
  isPlaying: boolean;
  onClick: (trackId: number) => void;
}

export function TrackListItem({
  children,
  hideArtist = false,
  hideCover = false,
  index,
  isCurrentTrack,
  isPlaying,
  onClick,
  track
}: TrackProps) {
  return (
    <TrackListRow key={track.id} className='group' onDoubleClick={() => onClick(track.id)}>
      <TrackListCell className='text-muted-foreground'>
        <TrackPlayButton
          isPlaying={isCurrentTrack && isPlaying}
          data={{
            album: { name: track.attributes.album.data.attributes.name },
            track: { name: track.attributes.name }
          }}
          onClick={() => onClick(track.id)}
        />
        <div
          className={cn('group-hover:hidden', {
            'text-primary': isCurrentTrack,
            hidden: isPlaying && isCurrentTrack
          })}
        >
          {index + 1}
        </div>
      </TrackListCell>
      <TrackListCell className='justify-start'>
        {!hideCover && (
          <Image
            alt='cover'
            className='mr-3 min-w-[40px] rounded-sm object-cover object-center'
            height={40}
            sizes='10vw'
            src={absoluteUrlStrapi(track.attributes.album.data.attributes.cover.data.attributes.url)}
            width={40}
          />
        )}
        <div>
          <div className={cn('ellipsis-one-line text-foreground', { 'text-primary': isCurrentTrack })}>
            {track.attributes.name}
          </div>
          {!hideArtist && (
            <Link
              className='ellipsis-one-line text-muted-foreground hover:underline'
              href={getPublicUrl.artist(track.attributes.artist.data.id)}
            >
              {track.attributes.artist.data.attributes.name}
            </Link>
          )}
        </div>
      </TrackListCell>
      {children}
      <TrackListCell className='lg:hidden'>
        <Button size='icon' variant='link'>
          <Icons.dotsHorizontal />
        </Button>
      </TrackListCell>
      <TrackListCell className='hidden lg:flex'>
        <LikeButton
          isLike
          className={cn('hidden text-muted-foreground hover:text-primary group-hover:block', { 'text-primary': false })}
          size='icon'
          variant='link'
        />
        {parseDuration(track.attributes.duration)}
      </TrackListCell>
    </TrackListRow>
  );
}
