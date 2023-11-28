import { AlbumService } from '@/services/album/album.service';

import HomePageContent from '../../components/home-page/home-page-content';

export default async function Home() {
  const listenNowAlbums = (await AlbumService.getListenNow()).data;
  const albums = (await AlbumService.getAlbumList()).data;

  return <HomePageContent data={{ listenNowAlbums, albums }} />;
}
