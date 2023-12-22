'use client';

import Link from 'next/link';
import { useCallback } from 'react';

import { Icons } from '@/components/icons';
import {
  TrackList,
  TrackListBody,
  TrackListCell,
  TrackListHead,
  TrackListHeader,
  TrackListRow
} from '@/components/track-list';
import { TrackListItem } from '@/components/track-list-item';
import type { SavedTrackFragment } from '@/gql/types';
import usePlayingTrackID from '@/hooks/use-playing-track-id';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { PlayerStatus } from '@/lib/types/types';
import { formatDistanceToNow } from '@/lib/utils';
import usePlayerStore, { usePlayerAPI } from '@/stores/use-player-store';

interface TracksTrackListProps {
  data: { tracks: SavedTrackFragment[] };
}

export function TracksTrackList({ data }: TracksTrackListProps) {
  const playerAPI = usePlayerAPI();
  const playingTrackId = usePlayingTrackID();
  const { playerStatus } = usePlayerStore();

  const startPlayback = useCallback(
    (trackID: number) => {
      playerAPI.start(
        data.tracks.map(({ track }) => track.data),
        trackID
      );
    },
    [data.tracks, playerAPI]
  );

  return (
    <div>
      <TrackList className='track-list-cols-2'>
        <TrackListHeader className='hidden lg:flex'>
          <TrackListRow>
            <TrackListHead className='text-base'>#</TrackListHead>
            <TrackListHead className='justify-start'>Название</TrackListHead>
            <TrackListHead className='hidden lg:flex'>Альбом</TrackListHead>
            <TrackListHead className='hidden lg:flex'>Дата добавления</TrackListHead>
            <TrackListHead>
              <Icons.clock className='h-4 w-4' />
            </TrackListHead>
          </TrackListRow>
        </TrackListHeader>
        <TrackListBody>
          {data.tracks.map(({ createdAt, track }, index) => (
            <TrackListItem
              isSaved
              index={index}
              isCurrentTrack={track.data.id === playingTrackId}
              isPlaying={playerStatus === PlayerStatus.PLAY}
              isUnauth={false}
              track={track.data}
              onClick={startPlayback}
            >
              <TrackListCell className='hidden lg:flex'>
                <Link className='hover:underline' href={getPublicUrl.album(track.data.attributes.album.data.id)}>
                  {track.data.attributes.album.data.attributes.name}
                </Link>
              </TrackListCell>
              <TrackListCell className='hidden lg:flex'>{formatDistanceToNow(createdAt)}</TrackListCell>
            </TrackListItem>
          ))}
        </TrackListBody>
      </TrackList>
    </div>
  );
}
