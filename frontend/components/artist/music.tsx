import type { Album } from '@/interfaces/album';
import { absoluteUrlStrapi } from '@/lib/utils';

import { AlbumArtwork } from '../album-artwork';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

interface ArtistMusicProps {
  albums: Album[];
}

export function ArtistMusic({ albums }: ArtistMusicProps) {
  return (
    <div className='relative'>
      <ScrollArea>
        <div className='flex space-x-6 pb-4'>
          {albums.reverse().map((album) => (
            <AlbumArtwork
              key={album.id}
              album={album}
              aspectRatio='square'
              className='w-60'
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
