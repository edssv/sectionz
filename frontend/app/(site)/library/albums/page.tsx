import { AlbumEmptyPlaceholder } from '@/components/library/album-empty-placeholder';
import { TypographyH2 } from '@/components/ui/typography-h2';

export default function AlbumsPage() {
  return (
    <div className='space-y-4'>
      <TypographyH2>Альбомы</TypographyH2>
      <AlbumEmptyPlaceholder />
    </div>
  );
}
