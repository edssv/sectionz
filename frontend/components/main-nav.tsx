'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { siteConfig } from '@/config/site';

export function MainNav() {
  return (
    <div className='flex gap-6 md:gap-10'>
      <Link className='flex items-center space-x-2 md:hidden' href='/'>
        <Image
          alt={`${siteConfig.name}`}
          height={40}
          sizes='25vw'
          src={`${siteConfig.url}/android-chrome-192x192.png`}
          width={40}
        />
        <span className='font-medium sm:inline-block'>{siteConfig.name}</span>
      </Link>
    </div>
  );
}
