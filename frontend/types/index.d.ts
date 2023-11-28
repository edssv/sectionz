import type { Artist } from '@/components/artist';
import type { Icons } from '@/components/icons';

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavPart = {
  title: string;
  items: SidebarNavItem[];
};

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href: string;
      items: NavLink[];
    }
);

export type ArtistSection = {
  title: string;
  component: keyof typeof Artist;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    vkProfile: string;
    github: string;
  };
  creator: string;
};

export type NavConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavPart[];
};

export type ArtistConfig = {
  sections: ArtistSection[];
};
