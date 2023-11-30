import { ArtistEmptyPlaceholder } from '@/components/library/artist-empty-placeholder';
import { TypographyH2 } from '@/components/ui/typography-h2';

export default function ArtistsPage() {
  return (
    <div className='space-y-4'>
      <TypographyH2>Артисты</TypographyH2>
      <ArtistEmptyPlaceholder />
    </div>
  );
}
