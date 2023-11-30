'use client';

import Link from 'next/link';
import type { User } from 'next-auth';
import { signOut } from 'next-auth/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { UserAvatar } from '@/components/user-avatar';
import { getPublicUrl } from '@/lib/publicUrlBuilder';

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, 'name' | 'image' | 'email' | 'id'>;
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar className='h-8 w-8' user={{ name: user.name || null, image: user.image || null }} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-1 leading-none'>
            {user.name && <p className='font-medium'>{user.name}</p>}
            {user.email && <p className='w-[200px] truncate text-sm text-muted-foreground'>{user.email}</p>}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={getPublicUrl.profile(user.id)}>Профиль</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={getPublicUrl.settings()}>Настройки</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='cursor-pointer'
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/login`
            });
          }}
        >
          Выйти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
