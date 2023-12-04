import Image from 'next/image';

import type { Artist } from '@/lib/interfaces/strapi-artist';
import { absoluteUrlStrapi } from '@/lib/utils';

import { Icons } from '../icons';
import { TypographyH1 } from '../ui/typography-h1';

interface ArtistHeaderProps {
  artist: Artist;
}

export function ArtistHeader({ artist }: ArtistHeaderProps) {
  return (
    <div className='-mx-10'>
      <div className='relative flex h-[480px] w-full items-center justify-center'>
        {artist.attributes.image.data ? (
          <Image
            priority
            alt={artist.attributes.name}
            className='h-full w-full object-cover brightness-[.7]'
            height={384}
            sizes='100vw'
            src={absoluteUrlStrapi(artist.attributes.image.data.attributes.url)}
            width={280}
          />
        ) : (
          <Icons.avatar className='h-48 w-48 text-muted-foreground' />
        )}
        <div className='absolute bottom-0 left-0 z-10 flex w-full flex-col justify-between bg-gradient-top px-10 pt-32  text-white'>
          <div className='mb-6 flex flex-col gap-2'>
            <span className='text-sm'>Исполнитель</span>
            <TypographyH1>{artist.attributes.name}</TypographyH1>

            {/* <div className=''>2 000 слушателей в месяц</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
