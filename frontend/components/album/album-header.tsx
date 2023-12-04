'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { GetAlbumQuery } from '@/gql/types';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { absoluteUrlStrapi, convertSecToMinutes } from '@/lib/utils';

import { TypographyH1 } from '../ui/typography-h1';
import { TypographyMuted } from '../ui/typography-muted';

type AlbumHeaderData = GetAlbumQuery['album']['data'];

interface AlbumPageHeaderProps {
  data: AlbumHeaderData;
}

export function AlbumHeader({ data }: AlbumPageHeaderProps) {
  return (
    <div className='flex flex-col items-center gap-3 md:flex-row md:items-end md:gap-8'>
      <div className='h-64 w-64'>
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
      <div className='flex w-full flex-col md:w-auto'>
        <span className='hidden text-sm md:inline-block'>
          {' '}
          {data.attributes?.album_type === 'album' ? 'Альбом' : 'Сингл'}
        </span>
        <TypographyH1 className='mb-2 mt-4 md:mb-16'>{data.attributes.name}</TypographyH1>
        <div className='flex items-center gap-[1px] text-sm'>
          <div className='flex items-center gap-1'>
            <Image
              alt={data.attributes.artist.data.attributes.name}
              className='h-[28px] rounded-full object-cover'
              height={28}
              sizes='5vw'
              src={absoluteUrlStrapi(data.attributes.artist.data.attributes.image.data.attributes.url)}
              width={28}
            />
            <Link className='font-semibold' href={getPublicUrl.artist(data.attributes.artist.data.id)}>
              {data.attributes.artist.data.attributes.name}
            </Link>
          </div>
          <span className='dot-separator'>&nbsp;</span>
          <span>{data.attributes.genre}</span>
          <span className='dot-separator'>&nbsp;</span>
          <span className='mr-[2px]'>{data.attributes.tracks.data.length} треков,</span>
          <TypographyMuted>{convertSecToMinutes(data.attributes.duration_sec, 'album')}</TypographyMuted>
        </div>
      </div>
    </div>
  );
}
