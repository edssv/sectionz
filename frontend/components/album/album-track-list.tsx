import { Icons } from '@/components/icons';
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { GetAlbumQuery } from '@/gql/types';
import { convertSecToMinutes, formatDate, plural } from '@/lib/utils';

import { Track } from '../track';

type AlbumControlsData = GetAlbumQuery['album']['data'];

interface AlbumPageListProps {
  data: AlbumControlsData;
}

export function AlbumTrackList({ data }: AlbumPageListProps) {
  return (
    <Table>
      <TableCaption className='mt-10 text-left md:pl-3'>
        <p>{formatDate(data.attributes.release_date)}</p>
        <span>
          {`${data.attributes.tracks.data.length} ${plural(data.attributes.tracks.data.length, [
            'трек',
            'трека',
            'треков',
            'треков'
          ])},
          ${convertSecToMinutes(data.attributes.duration_sec, 'album')}`}
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
        {data.attributes.tracks.data.map((track, index) => (
          <Track key={track.id} hideCover index={index} track={track} />
        ))}
      </TableBody>
    </Table>
  );
}
