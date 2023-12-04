import Image from 'next/image';
import * as React from 'react';

import { ModeToggle } from '@/components/mode-toggle';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import { TypographyMuted } from './ui/typography-muted';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className, 'h-[var(--footer-height)] border-t')}>
      <div className='container flex h-full flex-col items-center justify-between gap-4 md:flex-row'>
        <div className='flex h-full flex-col items-center gap-4 md:flex-row md:gap-2'>
          <Image
            alt={`${siteConfig.name}`}
            className='inline-block h-6 w-6'
            height={24}
            sizes='10vw'
            src={`${siteConfig.url}/android-chrome-192x192.png`}
            width={24}
          />
          <TypographyMuted className='text-center leading-loose md:text-left'>
            Built by{' '}
            <a
              className='font-medium underline underline-offset-4'
              href={siteConfig.links.vkProfile}
              rel='noreferrer'
              target='_blank'
            >
              ForeverBetter
            </a>
            . Inspired by{' '}
            <a
              className='font-medium underline underline-offset-4'
              href='https://twitter.com/shadcn'
              rel='noreferrer'
              target='_blank'
            >
              shadcn
            </a>
            . The source code is available on{' '}
            <a
              className='font-medium underline underline-offset-4'
              href={siteConfig.links.github}
              rel='noreferrer'
              target='_blank'
            >
              GitHub
            </a>
            .
          </TypographyMuted>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
