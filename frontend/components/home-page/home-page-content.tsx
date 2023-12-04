'use client';

import { AlbumArtwork } from '@/components/album-artwork';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import type { Album } from '@/lib/interfaces/album';
import { absoluteUrlStrapi } from '@/lib/utils';

interface HomePageContentProps {
  data: {
    listenNowAlbums: Album[];
    albums: Album[];
  };
}

export default function HomePageContent({ data }: HomePageContentProps) {
  return (
    <div className='grid w-full lg:grid-cols-5'>
      <div className='col-span-3 lg:col-span-5'>
        <div className='h-full'>
          <div className='flex items-center justify-between'>
            <div className='space-y-1'>
              <h2 className='text-2xl font-semibold tracking-tight'>Listen Now</h2>
              <p className='text-sm text-muted-foreground'>Top picks for you. Updated daily.</p>
            </div>
          </div>
          <Separator className='my-4' />
          <div className='relative'>
            <ScrollArea>
              <div className='flex space-x-4 pb-4'>
                {data.listenNowAlbums.map((album) => (
                  <AlbumArtwork
                    key={album.id}
                    album={album}
                    aspectRatio='portrait'
                    className='w-[250px]'
                    coverUrl={absoluteUrlStrapi(album.attributes.cover?.data.attributes.url)}
                    height={330}
                    width={250}
                  />
                ))}
              </div>
              <ScrollBar orientation='horizontal' />
            </ScrollArea>
          </div>
          <div className='mt-6 space-y-1'>
            <h2 className='text-2xl font-semibold tracking-tight'>Made for You</h2>
            <p className='text-sm text-muted-foreground'>Your personal playlists. Updated daily.</p>
          </div>
          <Separator className='my-4' />
          <div className='relative'>
            <ScrollArea className=''>
              <div className='flex space-x-4 pb-4'>
                {data.albums.map((album) => (
                  <AlbumArtwork
                    key={album.id}
                    album={album}
                    aspectRatio='square'
                    // className='w-[240px]'
                    coverUrl={absoluteUrlStrapi(album.attributes.cover?.data.attributes.url)}
                    height={240}
                    width={240}
                  />
                ))}
              </div>
              <ScrollBar orientation='horizontal' />
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
