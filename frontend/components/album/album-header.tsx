'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Enum_Album_Albumtype, type GetAlbumQuery } from '@/gql/types';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { absoluteUrlStrapi, parseAlbumDuration } from '@/lib/utils';

import { TypographyMuted } from '../ui/typography-muted';

type AlbumHeaderData = GetAlbumQuery['album']['data'];

interface AlbumPageHeaderProps {
  data: AlbumHeaderData;
}

export function AlbumHeader({ data }: AlbumPageHeaderProps) {
  return (
    <div className='flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:gap-8'>
      <div className='h-60 w-60 lg:h-64 lg:w-64'>
        <Image
          priority
          alt='Обложка'
          className='h-full w-full rounded-md object-cover'
          height={280}
          sizes='90vw'
          src={absoluteUrlStrapi(data.attributes.cover.data.attributes?.url)}
          width={280}
        />
      </div>
      <div className='flex w-full flex-col lg:w-auto'>
        <span className='hidden text-sm lg:inline-block'>
          {data.attributes?.albumType === Enum_Album_Albumtype.Album ? 'Альбом' : 'Сингл'}
        </span>
        <h1 className='heading mb-2 text-3xl lg:mb-16 lg:mt-4 lg:text-5xl'>{data.attributes.name}</h1>
        <div className='flex flex-col gap-[1px] gap-y-2 text-sm lg:flex-row lg:items-center'>
          <div className='flex items-center gap-2 lg:gap-1'>
            <Image
              alt={data.attributes.artist.data.attributes.name}
              className='h-[28px] rounded-full object-cover'
              height={28}
              sizes='5vw'
              src={absoluteUrlStrapi(data.attributes.artist.data.attributes.image.data.attributes.url)}
              width={28}
            />
            <Link className='lg:font-semibold' href={getPublicUrl.artist(data.attributes.artist.data.id)}>
              {data.attributes.artist.data.attributes.name}
            </Link>
          </div>
          <div className='flex items-center'>
            <TypographyMuted>
              <span className='dot-separator hidden lg:inline-block'>.</span>
              <span>{data.attributes.genre}</span>
              <span className='dot-separator'>.</span>
              <span className='mr-[2px]'>{data.attributes.tracks.data.length} треков,</span>
              {parseAlbumDuration(data.attributes.duration)}
            </TypographyMuted>
          </div>
        </div>
      </div>
    </div>
  );
}
