import { notFound } from 'next/navigation';

import { Artist } from '@/components/artist';
import { ArtistControls } from '@/components/artist/controls';
import { ArtistHeader } from '@/components/artist/header';
import { TypographyH3 } from '@/components/ui/typography-h3';
import { artistConfig } from '@/config/artist';
import { ArtistService } from '@/services/artist/artist.service';

interface ArtistPageProps {
  params: {
    artistId: string;
  };
}

async function getArtistFromParams(params: ArtistPageProps['params']) {
  const artistId = Number(params?.artistId);
  const { data } = await ArtistService.getArtist(artistId);

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const artist = await getArtistFromParams(params);

  return (
    <div className='-my-10 flex flex-col'>
      <div className='flex flex-col gap-4'>
        <ArtistHeader artist={artist} />
        <ArtistControls artist={artist} />
      </div>
      <div className='space-y-12 py-12'>
        {artistConfig.sections.map((section) => {
          const Component = Artist[section.component];
          return (
            <div key={section.title}>
              <TypographyH3 className='mb-4'>{section.title}</TypographyH3>
              <Component albums={artist.attributes.albums.data} tracks={artist.attributes.tracks.data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
