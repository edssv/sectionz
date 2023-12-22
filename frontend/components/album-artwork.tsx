'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
import type { AlbumPreviewFragment } from '@/gql/types';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { cn } from '@/lib/utils';
import { AlbumService } from '@/services/album.service';
import LibraryApi from '@/stores/library-api';
import { usePlayerAPI } from '@/stores/use-player-store';

import { playlists } from '../lib/data/playlists';

import { AlbumSaveButton } from './album-save-button';
import { Icons } from './icons';
import ShareDialog from './share-dialog';
import { Button } from './ui/button';
import { TypographyMuted } from './ui/typography-muted';

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: AlbumPreviewFragment;
  coverUrl: string;
  aspectRatio?: 'portrait' | 'square';
  width?: number;
  height?: number;
  isSaved: boolean;
  isUnauth: boolean;
}

export function AlbumArtwork({
  album,
  aspectRatio = 'portrait',
  className,
  coverUrl,
  height,
  isSaved: saved,
  isUnauth,
  width,
  ...props
}: AlbumArtworkProps) {
  const [isSaved, setIsSaved] = useState(saved);
  const PlayerApi = usePlayerAPI();

  const SaveToLibraryIcon = isSaved ? Icons.checkCircle : Icons.plusCircle;

  const saveAlbumToLibrary = () => {
    if (isSaved) {
      AlbumService.removeUserSavedAlbum(album.id).then((res) => setIsSaved(res.isSaved));
    } else {
      AlbumService.saveAlbumForCurrentUser(album.id).then((res) => setIsSaved(res.isSaved));
    }
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
                'h-full w-full object-cover transition-all group-hover:brightness-75 group-hover:saturate-100',
                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
              )}
            />
          </Link>
          <div className='opacity-0 transition-all group-hover:opacity-100'>
            <Button
              className='absolute bottom-3 right-3 z-10 h-12 w-12 rounded-full'
              size='icon'
              onClick={() => LibraryApi.Album.play(album.id)}
            >
              <Icons.play className='h-4 w-4' />
            </Button>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={() => PlayerApi.addNextInQueue(album.attributes.tracks.data.map((obj) => obj.id))}>
            <Icons.queueNext className='mr-2 h-4 w-4' />
            Включить следующим
          </ContextMenuItem>
          <ContextMenuItem onClick={() => PlayerApi.addInQueue(album.attributes.tracks.data.map((obj) => obj.id))}>
            <Icons.queueEnd className='mr-2 h-4 w-4' />
            Добавить в очередь
          </ContextMenuItem>

          <ContextMenuSeparator />

          <ContextMenuItem asChild={isUnauth} onClick={saveAlbumToLibrary}>
            <SaveToLibraryIcon className={cn('mr-2 h-4 w-4', { 'text-primary': isSaved })} />{' '}
            {isSaved ? 'Удалить из библиотеки' : 'Добавить в библиотеку'}
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Icons.plus className='mr-2 h-4 w-4' />
              Добавить в плейлист
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className='w-48'>
              <ContextMenuItem>
                <Icons.plusCircle className='mr-2 h-4 w-4' />
                New Playlist
              </ContextMenuItem>
              <ContextMenuSeparator />
              {playlists.map((playlist) => (
                <ContextMenuItem key={playlist}>
                  <Icons.playlists className='mr-2 h-4 w-4' />
                  {playlist}
                </ContextMenuItem>
              ))}
            </ContextMenuSubContent>
          </ContextMenuSub>

          <ContextMenuSeparator />

          <ContextMenuItem>
            <ShareDialog>
              <div className='flex items-center'>
                {' '}
                <Icons.share className='mr-2 h-4 w-4' />
                Поделиться
              </div>
            </ShareDialog>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className='space-y-1 text-sm'>
        <h3 className='font-medium leading-none'>{album.attributes.name}</h3>
        <TypographyMuted className='text-xs'>{album.attributes.artist.data.attributes.name}</TypographyMuted>
      </div>
    </div>
  );
}
