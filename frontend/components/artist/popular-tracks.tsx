'use client';

import { Table, TableBody } from '@/components/ui/table';
import type { Track as ITrack } from '@/lib/types/strapi-track';

import { Track } from '../track';
import { Button } from '../ui/button';

interface PopularTracksProps {
  tracks: ITrack[];
}

export function ArtistPopularTracks({ tracks }: PopularTracksProps) {
  return (
    <div>
      <Table>
        <TableBody>
          {tracks.map((track, index) => (index < 5 ? <Track hideArtist index={index} track={track} /> : null))}
        </TableBody>
      </Table>
      {tracks.length > 5 ? (
        <Button className='mt-3' variant='ghost'>
          Показать все
        </Button>
      ) : null}
    </div>
  );
}
