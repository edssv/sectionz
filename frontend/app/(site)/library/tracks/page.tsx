import { TrackEmptyPlaceholder } from '@/components/library/track-empty-placeholder';

export default function TracksPage() {
  return (
    <div className='space-y-4'>
      <h1 className='heading text-2xl'>Треки</h1>
      <TrackEmptyPlaceholder />
    </div>
  );
}
