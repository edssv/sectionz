import { notFound } from 'next/navigation';

import { Album } from '@/components/album';
import { AlbumService } from '@/services/album/album.service';

interface AlbumPageProps {
  params: {
    albumId: string;
  };
}

async function getAlbumFromParams(params: AlbumPageProps['params']) {
  const albumId = Number(params?.albumId);
  const { data: album } = await AlbumService.getAlbum(albumId);

  if (!album) {
    return notFound();
  }

  return album;
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const album = await getAlbumFromParams(params);

  return (
    <div className='space-y-8 md:space-y-12'>
      <Album.header album={album} />
      <div className='space-y-8'>
        <Album.controls album={album} />
        <Album.list album={album} />
      </div>
    </div>
  );
}
