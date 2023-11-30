import Link from 'next/link';
import type { User } from 'next-auth';

import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { cn } from '@/lib/utils';

import { Icons } from './icons';
import { buttonVariants } from './ui/button';
import { Input } from './ui/input';
import { UserAccountNav } from './user-account-nav';

interface SiteHeaderProps {
  user: User | undefined;
}

export function SiteHeader({ user }: SiteHeaderProps) {
  return (
    <header className='fixed right-0 top-0 z-50 flex h-16 w-full items-center border-b bg-background md:w-[calc(100%-var(--sidebar-nav-width))]'>
      <div className='flex w-full items-center justify-between gap-6 !px-6 '>
        <div className='relative hidden w-full md:block'>
          <Icons.search className='absolute left-3 top-[1px] h-4 w-4 shrink-0 translate-y-1/2 text-muted-foreground' />{' '}
          <Input className='hidden max-w-sm pl-10 md:block' placeholder='Поиск треков, альбомов, исполнителей' />
        </div>
        {user ? (
          <UserAccountNav user={user} />
        ) : (
          <Link
            className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'px-4')}
            href={getPublicUrl.login()}
          >
            Войти
          </Link>
        )}
      </div>
    </header>
  );
}
