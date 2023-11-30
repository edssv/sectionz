import { TrackEmptyPlaceholder } from '@/components/library/track-empty-placeholder';
import { TypographyH2 } from '@/components/ui/typography-h2';

export default function TracksPage() {
  return (
    <div className='space-y-4'>
      <TypographyH2>Треки</TypographyH2>
      <TrackEmptyPlaceholder />
    </div>
  );
}
