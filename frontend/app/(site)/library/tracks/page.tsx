import { TrackEmptyPlaceholder } from '@/components/library/tracks/tracks-empty-placeholder';
import { TracksTrackList } from '@/components/library/tracks/tracks-track-list';
import { getApiUserToken } from '@/lib/session';
import { TrackService } from '@/services/track.service';

export default async function TracksPage() {
  const token = await getApiUserToken();
  const { data } = await TrackService.getUserSavedTracks(token!);

  if (!data.me.savedTracks.length) {
    return <TrackEmptyPlaceholder />;
  }

  return (
    <div className='space-y-4'>
      <h1 className='heading text-2xl'>Треки</h1>
      <TracksTrackList data={{ tracks: data.me.savedTracks }} />
    </div>
  );
}
