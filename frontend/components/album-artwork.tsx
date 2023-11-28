/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { PlusCircledIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from '@/components/ui/context-menu';
import useOnPlay from '@/hooks/useOnPlay';
import { usePlayer } from '@/hooks/usePlayer';
import type { Album } from '@/interfaces/album';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { cn } from '@/lib/utils';

import { playlists } from '../data/playlists';

import { PlayButton } from './play-button';
import { TypographyMuted } from './ui/typography-muted';

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  coverUrl: string;
  aspectRatio?: 'portrait' | 'square';
  width?: number;
  height?: number;
}

export function AlbumArtwork({
  album,
  aspectRatio = 'portrait',
  className,
  coverUrl,
  height,
  width,
  ...props
}: AlbumArtworkProps) {
  const onPlay = useOnPlay(album.attributes.tracks.data);
  const player = usePlayer();

  const isPlaying = player.activeId === album.id && player.isPlaying;

  const handleClickOnPlay = () => {
    if (album.id === player.activeId) {
      if (player.isPlaying) {
        player.setIsPlaying(false);
      } else player.setIsPlaying(true);
    }

    player.setActiveAlbumId(album.id);
    onPlay(album.attributes.tracks.data[0].id);
  };

  return (
    <div className={cn('space-y-3', className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger className='group relative cursor-pointer'>
          <Link className='block overflow-hidden rounded-md' href={getPublicUrl.album(album.id)}>
            <Image
              alt={album.attributes.name}
              height={height}
              src={coverUrl}
              width={width}
              className={cn(
                'h-auto w-auto object-cover transition-all group-hover:brightness-75 group-hover:saturate-100',
                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
              )}
            />
          </Link>
          <div className='opacity-0 transition-all group-hover:opacity-100'>
            <PlayButton
              className='absolute bottom-3 right-3 z-10 h-12 w-12 rounded-full'
              isPlaying={isPlaying}
              size='icon'
              onClick={handleClickOnPlay}
            />
            {/* <ButtonIcon
              className='absolute right-2 top-2 h-10 w-10 rounded-full'
              icon='dotsHorizontal'
              variant='secondary'
            /> */}
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className='w-40'>
          <ContextMenuItem>Add to Library</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
            <ContextMenuSubContent className='w-48'>
              <ContextMenuItem>
                <PlusCircledIcon className='mr-2 h-4 w-4' />
                New Playlist
              </ContextMenuItem>
              <ContextMenuSeparator />
              {playlists.map((playlist) => (
                <ContextMenuItem key={playlist}>
                  <svg
                    className='mr-2 h-4 w-4'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3' />
                  </svg>
                  {playlist}
                </ContextMenuItem>
              ))}
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Later</ContextMenuItem>
          <ContextMenuItem>Create Station</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className='space-y-1 text-sm'>
        <h3 className='font-medium leading-none'>{album.attributes.name}</h3>
        <TypographyMuted className='text-xs'>{album.attributes.artist.data.attributes.name}</TypographyMuted>
      </div>
    </div>
  );
}
