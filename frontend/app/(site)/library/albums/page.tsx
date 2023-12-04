'use client';

import { AlbumEmptyPlaceholder } from '@/components/library/album-empty-placeholder';
import { TypographyH2 } from '@/components/ui/typography-h2';
import { useGetAlbumListQuery } from '@/gql/types';

export default function AlbumsPage() {
  const { data } = useGetAlbumListQuery();

  console.log(data);
  return (
    <div className='space-y-4'>
      <TypographyH2>Альбомы</TypographyH2>
      <AlbumEmptyPlaceholder />
    </div>
  );
}
