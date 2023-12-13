import { notFound } from 'next/navigation';

import client from '@/apollo/apollo-client';
import { AlbumControls } from '@/components/album/album-controls';
import { AlbumHeader } from '@/components/album/album-header';
import { AlbumTrackList } from '@/components/album/album-track-list';
import type { AlbumQuery, AlbumQueryVariables } from '@/gql/types';
import { AlbumDocument } from '@/gql/types';

interface AlbumPageProps {
  params: {
    albumId: string;
  };
}

async function getAlbumFromParams(params: AlbumPageProps['params']) {
  const albumId = Number(params?.albumId);
  const { data } = await client.query<AlbumQuery, AlbumQueryVariables>({
    query: AlbumDocument,
    variables: { id: albumId }
  });

  if (!data.album.data) {
    return notFound();
  }

  return data.album.data;
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const album = await getAlbumFromParams(params);

  return (
    <div className='space-y-6 lg:space-y-8'>
      <AlbumHeader data={album} />
      <div className='space-y-6 lg:space-y-8'>
        <AlbumControls data={{ album: { id: album.id } }} />
        <AlbumTrackList data={{ tracks: album.attributes.tracks.data }} />
      </div>
    </div>
  );
}
