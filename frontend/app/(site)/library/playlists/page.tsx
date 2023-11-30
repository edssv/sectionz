import { PlaylistEmptyPlaceholder } from '@/components/library/playlist-empty-placeholder';
import { TypographyH2 } from '@/components/ui/typography-h2';

export default function AlbumsPage() {
  return (
    <div className='space-y-4'>
      <TypographyH2>Плейлисты</TypographyH2>
      <PlaylistEmptyPlaceholder />
    </div>
  );
}
