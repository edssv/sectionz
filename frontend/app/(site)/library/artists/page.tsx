import { ArtistEmptyPlaceholder } from '@/components/library/artist-empty-placeholder';

export default function ArtistsPage() {
  return (
    <div className='space-y-4'>
      <h1 className='heading text-2xl'>Артисты</h1>
      <ArtistEmptyPlaceholder />
    </div>
  );
}
