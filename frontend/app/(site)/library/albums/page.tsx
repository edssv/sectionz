'use client';

import { AlbumEmptyPlaceholder } from '@/components/library/album-empty-placeholder';

export default function AlbumsPage() {
  return (
    <div className='space-y-4'>
      <h1 className='heading text-2xl'>Альбомы</h1>
      <AlbumEmptyPlaceholder />
    </div>
  );
}
