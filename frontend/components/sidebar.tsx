'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { navConfig } from '@/config/nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import type { Playlist } from '../data/playlists';

import { Icons } from './icons';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { TypographyH4 } from './ui/typography-h4';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
}

export function Sidebar({ className, playlists }: SidebarProps) {
  const router = useRouter();
  return (
    <div className={cn('pb-12', className)}>
      <div className='space-y-4 pb-4'>
        <Link className='mb-8 mt-3 flex items-center gap-3 px-6' href='/'>
          <Image
            priority
            alt={`${siteConfig.name}`}
            height={36}
            sizes='25vw'
            src={`${siteConfig.url}/android-chrome-192x192.png`}
            width={36}
          />
          <h2 className='text-lg font-semibold tracking-tight'>{siteConfig.name}</h2>
        </Link>
        {navConfig.sidebarNav.map((sidebarNavPart) =>
          sidebarNavPart.title === 'Плейлисты' ? (
            <div key={sidebarNavPart.title} className='py-2'>
              <TypographyH4 className='relative px-7'>{sidebarNavPart.title}</TypographyH4>
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
              <TypographyH4 className='mb-2 px-4'>{sidebarNavPart.title}</TypographyH4>{' '}
              <div className='space-y-1'>
                {sidebarNavPart.items.map((sidebarNavItem) => {
                  const Icon = Icons[sidebarNavItem.icon || 'arrowRight'];

                  return (
                    <Button
                      key={sidebarNavItem.title}
                      className='w-full justify-start'
                      variant='ghost'
                      onClick={() => router.push(sidebarNavItem.href)}
                    >
                      <Icon className='mr-2 h-4 w-4' />
                      {sidebarNavItem.title}
                    </Button>
                  );
                })}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
