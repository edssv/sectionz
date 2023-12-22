'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useCallback } from 'react';

import { useCheckUserSavedTracksQuery, type TrackFragment } from '@/gql/types';
import usePlayingTrackID from '@/hooks/use-playing-track-id';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { PlayerStatus } from '@/lib/types/types';
import usePlayerStore, { usePlayerAPI } from '@/stores/use-player-store';

import { TrackList, TrackListBody, TrackListCell } from '../track-list';
import { TrackListItem } from '../track-list-item';

interface QueuePageListProps {
  data: TrackFragment[];
}

export function QueueTrackList({ data }: QueuePageListProps) {
  const playerAPI = usePlayerAPI();
  const trackPlayingID = usePlayingTrackID();
  const { playerStatus } = usePlayerStore();

  const { data: session } = useSession();
  const { data: areTracksInLibrary } = useCheckUserSavedTracksQuery({
    variables: { tracks: data.map(({ id }) => id) },
    skip: !session
  });

  const savedTracks = areTracksInLibrary?.checkUserSavedTracks.tracks;

  const startPlayback = useCallback(
    (trackID: number) => {
      playerAPI.start(data, trackID);
    },
    [data, playerAPI]
  );

  return (
    <TrackList className='track-list-cols-1'>
      <TrackListBody>
        {data.map((track, index) => (
          <TrackListItem
            key={track.id}
            index={index}
            isCurrentTrack={trackPlayingID === track.id}
            isPlaying={playerStatus === PlayerStatus.PLAY}
            isSaved={savedTracks ? savedTracks[index] && savedTracks[index].isSaved : false}
            isUnauth={!session}
            track={track}
            onClick={startPlayback}
          >
            <TrackListCell className='hidden lg:flex'>
              <Link className='hover:underline' href={getPublicUrl.album(track.attributes.album.data.id)}>
                {track.attributes.album.data.attributes.name}
              </Link>
            </TrackListCell>
          </TrackListItem>
        ))}
      </TrackListBody>
    </TrackList>
  );
}
