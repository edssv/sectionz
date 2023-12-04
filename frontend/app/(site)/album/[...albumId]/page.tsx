import { notFound } from 'next/navigation';

import client from '@/apollo/apollo-client';
import { AlbumControls } from '@/components/album/album-controls';
import { AlbumHeader } from '@/components/album/album-header';
import { AlbumTrackList } from '@/components/album/album-track-list';
import type { GetAlbumQuery, GetAlbumQueryVariables } from '@/gql/types';
import { GetAlbumDocument } from '@/gql/types';

interface AlbumPageProps {
  params: {
    albumId: string;
  };
}

async function getAlbumFromParams(params: AlbumPageProps['params']) {
  const albumId = Number(params?.albumId);
  const { data } = await client.query<GetAlbumQuery, GetAlbumQueryVariables>({
    query: GetAlbumDocument,
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
    <div className='space-y-8 md:space-y-12'>
      <AlbumHeader data={album} />
      <div className='space-y-8'>
        <AlbumControls data={album} />
        <AlbumTrackList data={album} />
      </div>
    </div>
  );
}
