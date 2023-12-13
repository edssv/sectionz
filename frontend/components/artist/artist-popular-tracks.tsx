'use client';

import { useCallback } from 'react';

import type { TrackFragment } from '@/gql/types';
import usePlayingTrackID from '@/hooks/use-playing-track-id';
import { PlayerStatus } from '@/lib/types/types';
import usePlayerStore, { usePlayerAPI } from '@/stores/use-player-store';

import { TrackList, TrackListBody, TrackListCell } from '../track-list';
import { TrackListItem } from '../track-list-item';
import { Button } from '../ui/button';

interface PopularTracksProps {
  data: { tracks: TrackFragment[] };
}

export function ArtistPopularTracks({ data }: PopularTracksProps) {
  const playerAPI = usePlayerAPI();
  const playingTrackId = usePlayingTrackID();
  const { playerStatus } = usePlayerStore();

  const startPlayback = useCallback(
    (trackID: number) => {
      playerAPI.start(data.tracks, trackID);
    },
    [data.tracks, playerAPI]
  );

  return (
    <div>
      <TrackList className='track-list-cols-1'>
        <TrackListBody>
          {data.tracks.map((track, index) =>
            index < 5 ? (
              <TrackListItem
                hideArtist
                index={index}
                isCurrentTrack={track.id === playingTrackId}
                isPlaying={playerStatus === PlayerStatus.PLAY}
                track={track}
                onClick={startPlayback}
              >
                <TrackListCell className='hidden lg:flex'>{track.attributes.playCount}</TrackListCell>
              </TrackListItem>
            ) : null
          )}
        </TrackListBody>
      </TrackList>
      {/* {data.tracks.length > 5 ? (
        <Button className='mt-3 hidden lg:flex' variant='ghost'>
          Показать все
        </Button>
      ) : null} */}
    </div>
  );
}
