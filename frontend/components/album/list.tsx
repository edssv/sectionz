import { Icons } from '@/components/icons';
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Album } from '@/interfaces/album';
import { convertSecToMinutes, formatDate, plural } from '@/lib/utils';

import { Track } from '../track';

interface AlbumPageListProps {
  album: Album;
}

export function AlbumList({ album }: AlbumPageListProps) {
  return (
    <Table>
      <TableCaption className='mt-10 text-left md:pl-3'>
        <p>{formatDate(album.attributes.release_date)}</p>
        <span>
          {`${album.attributes.tracks.data.length} ${plural(album.attributes.tracks.data.length, [
            'трек',
            'трека',
            'треков',
            'треков'
          ])},
          ${convertSecToMinutes(album.attributes.duration_sec, 'album')}`}
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
        {album.attributes.tracks.data.map((track, index) => (
          <Track hideCover index={index} track={track} />
        ))}
      </TableBody>
    </Table>
  );
}
