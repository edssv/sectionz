import Link from 'next/link';

import { MainNav } from '@/components/main-nav';
import { Player } from '@/components/player';
import { SiteFooter } from '@/components/site-footer';
import { buttonVariants } from '@/components/ui/button';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { cn } from '@/lib/utils';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: MarketingLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col border-x'>
      <header className='z-40 bg-background'>
        <div className='container flex h-16 items-center justify-between border-x py-6'>
          <MainNav />
          <Link className={cn(buttonVariants({ variant: 'secondary' }), 'px-4')} href={getPublicUrl.login()}>
            Login
          </Link>
        </div>
      </header>
      <main className='container flex min-h-screen flex-1 flex-col items-center justify-between border-x border-t'>
        {children}
      </main>
      <SiteFooter />
      <Player />
    </div>
  );
}
