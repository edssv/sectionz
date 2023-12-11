'use client';

import { navConfig } from '@/config/nav';
import { cn } from '@/lib/utils';

import type { Playlist } from '../../lib/data/playlists';
import { SiteBrand } from '../site-brand';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';

import { SidebarNav } from './sidebar-nav';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn('pb-12', className)}>
      <div className='space-y-4 pb-4'>
        <SiteBrand className='mb-8 mt-3 px-6' />
        {navConfig.sidebarNav.map((sidebarNavPart) =>
          sidebarNavPart.title === 'Плейлисты' ? (
            <div key={sidebarNavPart.title} className='py-2'>
              <span className='heading relative px-7 text-lg'>{sidebarNavPart.title}</span>
              <ScrollArea className='h-[300px] px-1'>
                <div className='space-y-1 p-2'>
                  {playlists?.map((playlist, i) => (
                    <Button key={`${playlist}-${i}`} className='w-full justify-start font-normal' variant='ghost'>
                      <svg
                        className='mr-2 h-4 w-4'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M21 15V6' />
                        <path d='M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' />
                        <path d='M12 12H3' />
                        <path d='M16 6H3' />
                        <path d='M12 18H3' />
                      </svg>
                      {playlist}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          ) : (
            <div key={sidebarNavPart.title} className='px-3 py-2'>
              <span className='heading mb-2 inline-block px-4 text-lg'>{sidebarNavPart.title}</span>{' '}
              <SidebarNav items={sidebarNavPart.items} />
            </div>
          )
        )}
      </div>
    </div>
  );
}
