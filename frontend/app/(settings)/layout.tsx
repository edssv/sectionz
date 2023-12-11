import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SidebarNav } from '@/components/sidebar/sidebar-nav';
import { SiteBrand } from '@/components/site-brand';
import { SiteHeader } from '@/components/site-header';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { navConfig } from '@/config/nav';
import { getCurrentUser } from '@/lib/session';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Настройки'
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default async function SettingsLayout({ children }: SettingsLayoutProps) {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }

  return (
    <div className='min-h-full overflow-hidden'>
      <div className='fixed top-0 flex h-full w-full'>
        <div className={cn('hidden w-full max-w-[var(--sidebar-nav-width)] border-r pb-12 md:block')}>
          <div className='space-y-4 pb-4'>
            <SiteBrand className='mb-8 mt-3 px-6' />
            <div className='px-3 py-2'>
              <h1 className='heading mb-2 px-4 text-lg'>Настройки</h1>{' '}
              <SidebarNav items={navConfig.settingsSidebarNav} />
            </div>
          </div>
        </div>
        <SiteHeader user={user} />
        <div className={cn('mt-[var(--header-nav-height)] h-auto w-full overflow-y-auto overflow-x-hidden')}>
          <ScrollArea className='w-full md:hidden'>
            <SidebarNav className='w-full  border-b md:border-none' items={navConfig.settingsSidebarNav} />
            <ScrollBar orientation='horizontal' />
          </ScrollArea>
          <main className='container min-h-main-height max-w-5xl flex-grow justify-between py-10 '>{children}</main>
        </div>
      </div>
    </div>
  );
}
