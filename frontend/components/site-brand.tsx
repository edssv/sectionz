import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { siteConfig } from '@/config/site';

interface SiteBrandProps extends React.ButtonHTMLAttributes<HTMLDivElement> {}

export function SiteBrand({ ...props }: SiteBrandProps) {
  return (
    <div {...props}>
      <Link className='flex items-center gap-2' href='/'>
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
    </div>
  );
}
