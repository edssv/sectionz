'use client';

import Image from 'next/image';

import type { ArtistFragment, UploadFile } from '@/gql/types';
import { absoluteUrlStrapi } from '@/lib/utils';

import { Icons } from '../icons';

interface ArtistHeaderProps {
  data: {
    artist: Pick<ArtistFragment, 'id'> &
      Pick<ArtistFragment['attributes'], 'name'> & { image: Pick<UploadFile, 'url'> };
  };
}

export function ArtistHeader({ data }: ArtistHeaderProps) {
  return (
    <div className='-mx-10'>
      <div className='relative min-h-[324px] w-full lg:min-h-[420px]'>
        <div className='flex w-full justify-center pt-10 lg:pt-20'>
          {data.artist.image ? (
            <Image
              priority
              alt={data.artist.name}
              className='h-40 w-40 rounded-full object-cover shadow-2xl brightness-75 lg:h-48 lg:w-48'
              height={190}
              sizes='100vw'
              src={absoluteUrlStrapi(data.artist.image.url)}
              width={190}
            />
          ) : (
            <Icons.avatar className='h-24 w-24 text-muted-foreground' />
          )}
        </div>
        <div className='absolute bottom-0 left-0 flex w-full flex-col justify-between px-10 pt-32 after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-t after:from-muted after:to-transparent'>
          <div className='mb-4 flex items-end justify-between gap-2 lg:mb-6'>
            <div>
              <span className='text-sm'>Исполнитель</span>
              <h1 className='heading my-2 text-4xl lg:text-5xl'>{data.artist.name}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
