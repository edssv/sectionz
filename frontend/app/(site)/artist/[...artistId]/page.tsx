import { notFound } from 'next/navigation';

import { ArtistControls } from '@/components/artist/artist-controls';
import { ArtistHeader } from '@/components/artist/artist-header';
import { ArtistMusic } from '@/components/artist/artist-music';
import { ArtistTopTracks } from '@/components/artist/artist-top-tracks';
import { getApiUserToken } from '@/lib/session';
import { AlbumService } from '@/services/album.service';
import { ArtistService } from '@/services/artist.service';

interface ArtistPageProps {
  params: {
    artistId: string;
  };
}

async function getArtistFromParams(params: ArtistPageProps['params']) {
  const artistId = Number(params?.artistId);
  const token = await getApiUserToken();
  const { data } = await ArtistService.getArtist(artistId);

  if (!data?.artist) {
    return notFound();
  }

  let savedAlbums;
  const isUnauth = !token;

  if (!isUnauth) {
    savedAlbums = await AlbumService.checkUserSavedAlbums(
      data.artist.data.attributes.albums.data.map(({ id }) => id),
      token
    );
  }

  return { data, savedAlbums, isUnauth };
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { data, isUnauth, savedAlbums } = await getArtistFromParams(params);

  return (
    <div className='-mt-6 flex flex-col space-y-8 lg:-mt-10 lg:space-y-12'>
      <div className='flex flex-col gap-6'>
        <ArtistHeader
          data={{
            artist: {
              id: data.artist.data.id,
              name: data.artist.data.attributes.name,
              image: { url: data.artist.data.attributes.image.data.attributes.url }
            }
          }}
        />
        <ArtistControls
          data={{
            artist: {
              id: data.artist.data.id,
              name: data.artist.data.attributes.name
            }
          }}
        />
      </div>
      <div className='space-y-8 lg:space-y-12'>
        <div>
          <h2 className='typo-h2 mb-2 lg:mb-4'>Популярные треки</h2>
          <ArtistTopTracks data={{ tracks: data.topTracks.data }} isUnauth={isUnauth} />
        </div>
        <div>
          <h2 className='typo-h2 mb-4'>Музыка</h2>
          <ArtistMusic data={{ albums: data.artist.data.attributes.albums.data, savedAlbums }} isUnauth={isUnauth} />
        </div>
      </div>
    </div>
  );
}
