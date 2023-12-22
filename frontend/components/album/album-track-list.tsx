'use client';

import { useSession } from 'next-auth/react';
import { useCallback } from 'react';

import { Icons } from '@/components/icons';
import { useCheckUserSavedTracksQuery, type TrackFragment } from '@/gql/types';
import usePlayingTrackID from '@/hooks/use-playing-track-id';
import { PlayerStatus } from '@/lib/types/types';
import usePlayerStore, { usePlayerAPI } from '@/stores/use-player-store';

import { TrackList, TrackListBody, TrackListCell, TrackListHead, TrackListHeader, TrackListRow } from '../track-list';
import { TrackListItem } from '../track-list-item';

interface AlbumPageListProps {
  data: { tracks: TrackFragment[] };
}

export function AlbumTrackList({ data }: AlbumPageListProps) {
  const { data: session } = useSession();
  const { data: areTracksInLibrary } = useCheckUserSavedTracksQuery({
    variables: { tracks: data.tracks.map((obj) => obj.id) },
    skip: !session
  });
  const playerAPI = usePlayerAPI();
  const trackPlayingID = usePlayingTrackID();
  const { playerStatus } = usePlayerStore();

  const savedTracks = areTracksInLibrary?.checkUserSavedTracks.tracks;

  const startPlayback = useCallback(
    (trackID: number) => {
      playerAPI.start(data.tracks, trackID);
    },
    [data.tracks, playerAPI]
  );

  return (
    <TrackList className='track-list-cols-1'>
      <TrackListHeader className='hidden lg:flex'>
        <TrackListRow>
          <TrackListHead className='text-base'>#</TrackListHead>
          <TrackListHead className='justify-start'>Название</TrackListHead>
          <TrackListHead className='hidden lg:flex'>Прослушивания</TrackListHead>
          <TrackListHead>
            <Icons.clock className='h-4 w-4' />
          </TrackListHead>
        </TrackListRow>
      </TrackListHeader>
      <TrackListBody>
        {data.tracks.map((track, index) => (
          <TrackListItem
            key={track.id}
            hideCover
            index={index}
            isCurrentTrack={trackPlayingID === track.id}
            isPlaying={playerStatus === PlayerStatus.PLAY}
            isSaved={savedTracks ? savedTracks[index] && savedTracks[index].isSaved : false}
            isUnauth={!session}
            track={track}
            onClick={startPlayback}
          >
            <TrackListCell className='hidden lg:flex'>{track.attributes.playCount}</TrackListCell>
          </TrackListItem>
        ))}
      </TrackListBody>
    </TrackList>
  );
}
