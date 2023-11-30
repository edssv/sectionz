'use client';

import { usePathname, useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import type { SidebarNavItem } from '@/types';

import { Icons } from '../icons';
import { Button } from '../ui/button';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: SidebarNavItem[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={cn('flex space-x-2 md:flex-col md:space-x-0 md:space-y-1', className)} {...props}>
      {items.map((item) => {
        const Icon = Icons[item.icon || 'arrowRight'];

        return (
          <Button
            key={item.title}
            className={cn({ 'bg-muted hover:bg-muted': pathname === item.href }, 'justify-start')}
            variant='ghost'
            onClick={() => router.push(item.href)}
          >
            <Icon className='mr-2 h-4 w-4' />
            {item.title}
          </Button>
        );
      })}
    </div>
  );
}
