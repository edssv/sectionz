import type { NavConfig } from '@/types';

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs'
    },
    {
      title: 'Support',
      href: '/support',
      disabled: true
    }
  ],
  sidebarNav: [
    {
      title: 'Меню',
      items: [
        {
          title: 'Главная',
          href: '/',
          icon: 'playCircle'
        },
        {
          title: 'Обзор',
          href: '/browse',
          icon: 'browse'
        },
        {
          title: 'Поиск',
          href: '/search',
          icon: 'search'
        }
      ]
    },
    {
      title: 'Библиотека',
      items: [
        { title: 'Плейлисты', href: '/library/playlists', icon: 'playlists' },
        { title: 'Треки', href: '/library/tracks', icon: 'songs' },
        { title: 'Артисты', href: '/library/artists', icon: 'mic' },
        { title: 'Альбомы', href: '/library/albums', icon: 'library' }
      ]
    },
    {
      title: 'Плейлисты',
      items: []
    }
  ],
  settingsSidebarNav: [
    {
      title: 'Профиль',
      href: '/settings',
      icon: 'user'
    },

    {
      title: 'Уведомления',
      href: '/settings/notifications',
      icon: 'bell'
    },
    {
      title: 'Дисплей',
      href: '/settings/display',
      icon: 'tv'
    },
    {
      title: 'Безопасность',
      href: '/settings/security',
      icon: 'shieldCheck'
    }
  ]
};
