import Image from 'next/image';
import Link from 'next/link';

import type { Album } from '@/interfaces/album';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { absoluteUrlStrapi, convertSecToMinutes } from '@/lib/utils';

import { TypographyH1 } from '../ui/typography-h1';
import { TypographyMuted } from '../ui/typography-muted';

interface AlbumPageHeaderProps {
  album: Album;
}

export function AlbumHeader({ album }: AlbumPageHeaderProps) {
  return (
    <div className='flex flex-col items-center gap-3 md:flex-row md:items-end md:gap-8'>
      <div className='h-64 w-64'>
        <Image
          priority
          alt={album.attributes.name}
          className='h-full w-full rounded-md object-cover'
          height={280}
          sizes='90vw'
          src={absoluteUrlStrapi(album.attributes.cover.data.attributes.url)}
          width={280}
        />
      </div>
      <div className='flex w-full flex-col md:w-auto'>
        <span className='hidden text-sm md:inline-block'>
          {' '}
          {album.attributes.album_type === 'album' ? 'Альбом' : 'Сингл'}
        </span>
        <TypographyH1 className='mb-2 mt-4 md:mb-16'>{album.attributes.name}</TypographyH1>
        <div className='flex items-center gap-[1px] text-sm'>
          <div className='flex items-center gap-1'>
            <Image
              alt={album.attributes.artist.data.attributes.name}
              className='h-[28px] rounded-full object-cover'
              height={28}
              sizes='5vw'
              src={absoluteUrlStrapi(album.attributes.artist.data.attributes.image.data.attributes.url)}
              width={28}
            />
            <Link className='font-semibold' href={getPublicUrl.artist(album.attributes.artist.data.id)}>
              {album.attributes.artist.data.attributes.name}
            </Link>
          </div>
          <span className='dot-separator'>&nbsp;</span>
          <span>{album.attributes.genre}</span>
          <span className='dot-separator'>&nbsp;</span>
          <span className='mr-[2px]'>{album.attributes.tracks.data.length} треков,</span>
          <TypographyMuted>{convertSecToMinutes(album.attributes.duration_sec, 'album')}</TypographyMuted>
        </div>
      </div>
    </div>
  );
}
