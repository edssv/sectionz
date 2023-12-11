import { PlaylistEmptyPlaceholder } from '@/components/library/playlist-empty-placeholder';

export default function AlbumsPage() {
  return (
    <div className='space-y-4'>
      <h1 className='heading text-2xl'>Плейлисты</h1>
      <PlaylistEmptyPlaceholder />
    </div>
  );
}
