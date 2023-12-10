import client from '@/apollo/apollo-client';
import type { AlbumListQuery } from '@/gql/types';
import { AlbumListDocument } from '@/gql/types';

import HomePageContent from '../../components/home-page/home-page-content';

export default async function Home() {
  const { data } = await client.query<AlbumListQuery>({ query: AlbumListDocument });
  const albums = data.albums.data;

  return <HomePageContent data={{ listenNowAlbums: data.albums.data, albums }} />;
}
