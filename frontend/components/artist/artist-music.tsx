'use client';

import type { AlbumFragment, SavedStatus } from '@/gql/types';
import { absoluteUrlStrapi } from '@/lib/utils';

import { AlbumArtwork } from '../album-artwork';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

interface ArtistMusicProps {
  data: {
    albums: AlbumFragment[];
    savedAlbums: SavedStatus[] | undefined;
  };
  isUnauth: boolean;
}

export function ArtistMusic({ data, isUnauth }: ArtistMusicProps) {
  return (
    <div className='relative'>
      <ScrollArea>
        <div className='carousel flex'>
          {data.albums.reverse().map((album, i) => (
            <AlbumArtwork
              key={album.id}
              album={album}
              aspectRatio='square'
              className='w-[var(--carousel-item-base-width)]'
              coverUrl={absoluteUrlStrapi(album.attributes.cover?.data.attributes.url)}
              height={240}
              isSaved={data.savedAlbums ? data.savedAlbums[i] && data.savedAlbums[i].isSaved : false}
              isUnauth={isUnauth}
              width={240}
            />
          ))}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </div>
  );
}
