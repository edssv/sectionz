'use client';

import { useCallback } from 'react';

import { Icons } from '@/components/icons';
import type { GetAlbumQuery } from '@/gql/types';
import usePlayingTrackID from '@/hooks/use-playing-track-id';
import { PlayerStatus } from '@/lib/types/types';
import usePlayerStore, { usePlayerAPI } from '@/stores/use-player-store';

import { TrackList, TrackListBody, TrackListCell, TrackListHead, TrackListHeader, TrackListRow } from '../track-list';
import { TrackListItem } from '../track-list-item';

type AlbumControlsData = GetAlbumQuery['album']['data'];

interface AlbumPageListProps {
  data: AlbumControlsData;
}

export function AlbumTrackList({ data }: AlbumPageListProps) {
  const playerAPI = usePlayerAPI();
  const trackPlayingID = usePlayingTrackID();
  const { playerStatus } = usePlayerStore();

  const tracks = data.attributes.tracks.data;

  const startPlayback = useCallback(
    (trackID: number) => {
      playerAPI.start(tracks, trackID);
    },
    [tracks, playerAPI]
  );

  return (
    <TrackList aria-colcount={4}>
      <TrackListHeader>
        <TrackListRow>
          <TrackListHead className='text-base'>#</TrackListHead>
          <TrackListHead className='justify-start'>Название</TrackListHead>
          <TrackListHead>Прослушивания</TrackListHead>
          <TrackListHead>
            <Icons.clock />
          </TrackListHead>
        </TrackListRow>
      </TrackListHeader>
      <TrackListBody>
        {tracks.map((track, index) => (
          <TrackListItem
            key={track.id}
            hideCover
            index={index}
            isCurrentTrack={trackPlayingID === track.id}
            isPlaying={playerStatus === PlayerStatus.PLAY}
            track={track}
            onClick={startPlayback}
          >
            <TrackListCell>
              {track.attributes.playCount <= 100 ? 'менее 100' : track.attributes.playCount}
            </TrackListCell>
          </TrackListItem>
        ))}
      </TrackListBody>
    </TrackList>
  );
}
