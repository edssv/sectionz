import { AlbumService } from '@/services/album.service';

import HomePageContent from '../../components/home-page/home-page-content';

export default async function Home() {
  const { data } = await AlbumService.getSeveralAlbums();
  const albums = data.albums.data;

  return <HomePageContent data={{ listenNowAlbums: data.albums.data, albums }} />;
}
