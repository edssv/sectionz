import type { ArtistFragment, TrackFragment } from '@/gql/types';

import { PlayButton } from './play-button';
import TrackPlayingIndiator from './track-playing-indiator';

interface TrackPlayButtonProps {
  isPlaying: boolean;
  data: { track: Pick<TrackFragment['attributes'], 'name'>; album: Pick<ArtistFragment['attributes'], 'name'> };
  onClick: () => void;
}

export default function TrackPlayButton({ data, isPlaying, onClick }: TrackPlayButtonProps) {
  if (isPlaying) {
    return <TrackPlayingIndiator title='Пауза' />;
  }

  return (
    <PlayButton
      className='hidden group-hover:flex'
      isPlaying={isPlaying}
      size='icon'
      title={`Включить трек "${data.track.name}" исполнителя ${data.album.name}`}
      variant='link'
      onClick={onClick}
    />
  );
}
