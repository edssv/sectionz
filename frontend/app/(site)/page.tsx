import { AlbumArtwork } from '@/components/album-artwork';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { listenNowAlbums } from '@/data/albums';
import { absoluteUrlImageFromStrapi } from '@/lib/utils';
import { AlbumService } from '@/services/album/album.service';

export default async function Home() {
  const albums = (await AlbumService.getAlbumList()).data;

  return (
    <div className='grid lg:grid-cols-5'>
      <div className='col-span-3 lg:col-span-5'>
        <div className='h-full py-8'>
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
                {listenNowAlbums.map((album) => (
                  <AlbumArtwork
                    key={album.name}
                    album={album}
                    aspectRatio='portrait'
                    className='w-[250px]'
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
                {albums.map((album) => (
                  <AlbumArtwork
                    key={album.attributes.name}
                    aspectRatio='square'
                    className='w-[150px]'
                    height={150}
                    width={150}
                    album={{
                      ...album.attributes,
                      cover: absoluteUrlImageFromStrapi(album.attributes.cover?.data.attributes.url)
                    }}
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
