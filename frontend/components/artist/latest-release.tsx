import type { Album } from '@/lib/interfaces/album';
import { absoluteUrlStrapi } from '@/lib/utils';

import { AlbumArtwork } from '../album-artwork';

interface ArtistLatestReleaseProps {
  album: Album;
}

export function ArtistLatestRelease({ album }: ArtistLatestReleaseProps) {
  return (
    <div className='col-span-1 w-fit'>
      <h3 className='mb-4 text-lg font-semibold tracking-tight'>Последний релиз</h3>
      <AlbumArtwork
        album={album}
        aspectRatio='square'
        className='flex w-60 gap-8'
        coverUrl={absoluteUrlStrapi(album.attributes.cover.data.attributes.url)}
        height={140}
        width={140}
      />
    </div>
  );
}
