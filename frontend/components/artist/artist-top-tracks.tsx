'use client';

import { useCallback } from 'react';

import { useCheckUserSavedTracksQuery, type TrackFragment } from '@/gql/types';
import usePlayingTrackID from '@/hooks/use-playing-track-id';
import { PlayerStatus } from '@/lib/types/types';
import usePlayerStore, { usePlayerAPI } from '@/stores/use-player-store';

import { TrackList, TrackListBody, TrackListCell } from '../track-list';
import { TrackListItem } from '../track-list-item';
import { Button } from '../ui/button';

interface ArtistTopTracksProps {
  data: { tracks: TrackFragment[] };
  isUnauth: boolean;
}

export function ArtistTopTracks({ data, isUnauth }: ArtistTopTracksProps) {
  const { data: areTracksInLibrary } = useCheckUserSavedTracksQuery({
    variables: { tracks: data.tracks.map((obj) => obj.id) },
    skip: isUnauth
  });
  const playerAPI = usePlayerAPI();
  const playingTrackId = usePlayingTrackID();
  const { playerStatus } = usePlayerStore();

  const savedTracks = areTracksInLibrary?.checkUserSavedTracks?.tracks || [];

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
                key={track.id}
                hideArtist
                index={index}
                isCurrentTrack={track.id === playingTrackId}
                isPlaying={playerStatus === PlayerStatus.PLAY}
                isSaved={savedTracks[index] && savedTracks[index].isSaved}
                isUnauth={isUnauth}
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
