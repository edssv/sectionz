import type { AlbumFragment } from '@/gql/types';
import { absoluteUrlStrapi } from '@/lib/utils';

import { AlbumArtwork } from '../album-artwork';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

interface ArtistMusicProps {
  data: {
    albums: AlbumFragment[];
  };
}

export function ArtistMusic({ data }: ArtistMusicProps) {
  return (
    <div className='relative'>
      <ScrollArea>
        <div className='grid-list grid space-x-6 pb-4 '>
          {data.albums.reverse().map((album) => (
            <AlbumArtwork
              key={album.id}
              album={album}
              aspectRatio='square'
              className='h-auto w-full'
              coverUrl={absoluteUrlStrapi(album.attributes.cover?.data.attributes.url)}
              height={240}
              width={240}
            />
          ))}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </div>
  );
}
