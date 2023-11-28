import { env } from '@/env.mjs';
import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'SectionZ',
  description: 'Listen to new music',
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: { vkProfile: 'https://vk.com/sysoeev', github: 'https://github.com/Forever-Better/thepiratejournal' },
  creator: 'Эдуард Сысоев'
};
