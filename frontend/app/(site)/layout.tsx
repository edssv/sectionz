import PlayerEvents from '@/components/events/player-events';
import { Player } from '@/components/player/player';
import { Sidebar } from '@/components/sidebar/sidebar';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getCurrentUser } from '@/lib/session';
import { cn } from '@/lib/utils';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: MarketingLayoutProps) {
  const user = await getCurrentUser();

  return (
    <div className='min-h-full overflow-hidden'>
      <div className='fixed top-0 flex h-full w-full'>
        <Sidebar
          className='hidden w-full max-w-[var(--sidebar-nav-width)] border-r md:block'
          playlists={[
            'Recently Added',
            'Recently Played',
            'Top Songs',
            'Top Albums',
            'Top Artists',
            'Logic Discography',
            'Bedtime Beats',
            'Feeling Happy',
            'I miss Y2K Pop',
            'Runtober',
            'Mellow Days',
            'Eminem Essentials'
          ]}
        />
        <SiteHeader user={user} />
        <div
          className={cn('mt-[var(--header-nav-height)] h-auto w-full overflow-y-auto overflow-x-hidden')}
          id='main_outer'
        >
          <main className='container min-h-main-height w-full flex-grow justify-between py-10 '>{children}</main>
          <SiteFooter />
        </div>
        <Player />
        <PlayerEvents />
      </div>
    </div>
  );
}
