import { notFound } from 'next/navigation';

import { AlbumControls } from '@/components/album/album-controls';
import { AlbumHeader } from '@/components/album/album-header';
import { AlbumTrackList } from '@/components/album/album-track-list';
import { getApiUserToken } from '@/lib/session';
import { AlbumService } from '@/services/album.service';

interface AlbumPageProps {
  params: {
    albumId: string;
  };
}

async function getDataFromParams(params: AlbumPageProps['params']) {
  const albumId = Number(params?.albumId);
  const { data } = await AlbumService.getAlbum(albumId);
  const token = await getApiUserToken();

  if (!data.album.data) {
    return notFound();
  }

  let isSaved = false;
  const isUnauth = !token;

  if (!isUnauth) {
    const areAlbumsInLibrary = await AlbumService.checkUserSavedAlbums([albumId], token);

    if (areAlbumsInLibrary.length) {
      isSaved = areAlbumsInLibrary[0].isSaved;
    }
  }

  return { album: data.album.data, isSaved, isUnauth };
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { album, isSaved, isUnauth } = await getDataFromParams(params);

  return (
    <div className='space-y-6 lg:space-y-8'>
      <AlbumHeader data={album} />
      <div className='space-y-6 lg:space-y-8'>
        <AlbumControls data={{ album: { id: album.id } }} isSaved={isSaved} isUnauth={isUnauth} />
        <AlbumTrackList data={{ tracks: album.attributes.tracks.data }} />
      </div>
    </div>
  );
}
