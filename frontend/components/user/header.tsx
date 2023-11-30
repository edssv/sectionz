import Image from 'next/image';

import type { User } from '@/interfaces/user';
import { absoluteUrlStrapi } from '@/lib/utils';

import { Icons } from '../icons';
import { TypographyH1 } from '../ui/typography-h1';

interface UserHeaderProps {
  user: User;
}

export function UserHeader({ user }: UserHeaderProps) {
  return (
    <div className='flex items-center gap-6 md:items-end md:gap-8'>
      <div className='flex h-28 w-28 items-center justify-center rounded-full bg-secondary md:h-60 md:w-60'>
        {user.image ? (
          <Image
            priority
            alt={user.profile_name}
            className='h-full w-full rounded-md object-cover'
            height={260}
            sizes='90vw'
            src={absoluteUrlStrapi(user.image.url)}
            width={260}
          />
        ) : (
          <Icons.user className='h-12 w-12 text-muted-foreground md:h-16 md:w-16' />
        )}
      </div>
      <div className='flex flex-col md:w-auto'>
        <span className='hidden text-sm md:inline-block'>Профиль</span>
        <TypographyH1 className='mb-2 mt-4 text-xl md:mb-16'>{user.profile_name}</TypographyH1>
        <span>8 подписок</span>
      </div>
    </div>
  );
}
