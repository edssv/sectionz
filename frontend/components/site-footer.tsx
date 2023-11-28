import * as React from 'react';

import { ModeToggle } from '@/components/mode-toggle';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import { TypographyMuted } from './ui/typography-muted';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className, 'h-[var(--footer-height)] border-t')}>
      <div className='container h-full'>
        <div className='flex h-full items-center justify-between'>
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
          <div className='hidden md:block'>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
