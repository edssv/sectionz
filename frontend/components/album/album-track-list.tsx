'use client';

import { useCallback } from 'react';

import { Icons } from '@/components/icons';
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { GetAlbumQuery } from '@/gql/types';
import usePlayingTrackID from '@/hooks/use-playing-track-id';
import { PlayerStatus } from '@/lib/types/types';
import { formatDate, parseAlbumDuration, plural } from '@/lib/utils';
import usePlayerStore, { usePlayerAPI } from '@/stores/use-player-store';

import { Track } from '../track';

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
    <Table>
      <TableCaption className='mt-10 text-left md:pl-3'>
        <p>{formatDate(data.attributes.releaseDate)}</p>
        <span>
          {`${tracks.length} ${plural(tracks.length, ['трек', 'трека', 'треков', 'треков'])},
          ${parseAlbumDuration(data.attributes.duration)}`}
        </span>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='md:w-[32px]'>#</TableHead>
          <TableHead className='w-1/3'>Название</TableHead>
          <TableHead className='w-1/3 text-right'>Прослушивания</TableHead>
          <TableHead className='flex items-center justify-end'>
            <Icons.clock />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tracks.map((track, index) => (
          <Track
            key={track.id}
            hideCover
            index={index}
            isCurrentTrack={trackPlayingID === track.id}
            isPlaying={playerStatus === PlayerStatus.PLAY}
            track={track}
            onClick={startPlayback}
          />
        ))}
      </TableBody>
    </Table>
  );
}
