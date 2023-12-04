import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import type { Track } from '@/lib/interfaces/strapi-track';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { absoluteUrlStrapi, cn, formatDate } from '@/lib/utils';

import { LikeButton } from '../like-button';
import { TypographyMuted } from '../ui/typography-muted';

interface CenterControlsProps {
  track: Track;
}

export function MiddleControls({ track }: CenterControlsProps) {
  const [isLike, setLike] = useState(false);
  return (
    <div className='flex items-center justify-center gap-8'>
      <div className='flex items-center'>
        <div className='h-10 w-10'>
          <Image
            alt='cover'
            className='h-full w-full rounded-sm object-cover'
            height={40}
            sizes='5vw'
            src={absoluteUrlStrapi(track?.attributes.cover.data.attributes.url)}
            width={40}
          />
        </div>
        <div className='ml-4 mr-2 space-y-1 text-sm'>
          <h3 className='font-medium leading-none'>{track?.attributes.name}</h3>
          <div className='flex items-center text-muted-foreground'>
            <Link className='leading-none hover:underline' href={getPublicUrl.artist(track.attributes.artist.data.id)}>
              {track?.attributes.artist.data.attributes.name}
            </Link>
            <TypographyMuted className='dot-separator leading-none'>.</TypographyMuted>
            <Link className='leading-none hover:underline' href={getPublicUrl.album(track.attributes.album.data.id)}>
              {track?.attributes.album.data.attributes.name}
            </Link>
            <TypographyMuted className='dot-separator leading-none'>.</TypographyMuted>
            <TypographyMuted className='leading-none'>
              {formatDate(track.attributes.album.data.attributes.release_date, { year: 'numeric' })}
            </TypographyMuted>
          </div>
        </div>
        <LikeButton
          className={cn({ 'text-muted-foreground': !isLike })}
          isLike={isLike}
          setLike={() => setLike(!isLike)}
          size='icon'
          variant='ghost'
        />
      </div>
    </div>
  );
}
