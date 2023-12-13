import { notFound } from 'next/navigation';

import client from '@/apollo/apollo-client';
import { ArtistControls } from '@/components/artist/artist-controls';
import { ArtistHeader } from '@/components/artist/artist-header';
import { ArtistMusic } from '@/components/artist/artist-music';
import { ArtistPopularTracks } from '@/components/artist/artist-popular-tracks';
import type { ArtistQuery, ArtistQueryVariables } from '@/gql/types';
import { ArtistDocument } from '@/gql/types';

interface ArtistPageProps {
  params: {
    artistId: string;
  };
}

async function getArtistFromParams(params: ArtistPageProps['params']) {
  const artistId = Number(params?.artistId);
  const { data } = await client.query<ArtistQuery, ArtistQueryVariables>({
    query: ArtistDocument,
    variables: { id: artistId }
  });

  if (!data?.artist) {
    return notFound();
  }

  return data;
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { artist, popularTracks } = await getArtistFromParams(params);

  return (
    <div className='-mt-6 flex flex-col space-y-8 lg:-mt-10 lg:space-y-12'>
      <div className='flex flex-col gap-4'>
        <ArtistHeader
          data={{
            artist: {
              id: artist.data.id,
              name: artist.data.attributes.name,
              image: { url: artist.data.attributes.image.data.attributes.url }
            }
          }}
        />
        {/* <ArtistControls
          data={{
            artist: {
              id: artist.data.id,
              name: artist.data.attributes.name
            }
          }}
        /> */}
      </div>
      <div className='space-y-8 lg:space-y-12'>
        <div>
          <h2 className='typo-h2 mb-2 lg:mb-4'>Популярные треки</h2>
          <ArtistPopularTracks data={{ tracks: popularTracks.data }} />
        </div>
        <div>
          <h2 className='typo-h2 mb-4'>Музыка</h2>
          <ArtistMusic data={{ albums: artist.data.attributes.albums.data }} />
        </div>
      </div>
    </div>
  );
}
