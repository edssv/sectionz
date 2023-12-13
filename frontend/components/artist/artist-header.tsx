'use client';

import Image from 'next/image';

import type { ArtistFragment, UploadFile } from '@/gql/types';
import { absoluteUrlStrapi } from '@/lib/utils';
import LibraryApi from '@/stores/library-api';

import { Icons } from '../icons';
import { Button } from '../ui/button';

interface ArtistHeaderProps {
  data: {
    artist: Pick<ArtistFragment, 'id'> &
      Pick<ArtistFragment['attributes'], 'name'> & { image: Pick<UploadFile, 'url'> };
  };
}

export function ArtistHeader({ data }: ArtistHeaderProps) {
  return (
    <div className='-mx-10'>
      <div className='relative min-h-[324px] w-full lg:min-h-[386px]'>
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
            <div className='flex gap-4'>
              <Button
                className='rounded-full'
                size='icon'
                title={`Слушать исполнителя ${data.artist.name}`}
                onClick={() => LibraryApi.Artist.play(data.artist.id)}
              >
                <Icons.play className='h-4 w-4' />
              </Button>
              <h1 className='heading text-3xl'>{data.artist.name}</h1>
            </div>
            <div className='flex gap-2'>
              <Button
                className='hidden lg:block'
                title={`Подписаться на исполнителя ${data.artist.name}`}
                variant='outline'
              >
                Подписаться
              </Button>
              <Button variant='link'>
                <Icons.dotsHorizontal />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
