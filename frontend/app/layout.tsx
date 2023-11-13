import './globals.css';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Viewport } from 'next';

import localFont from 'next/font/local';

const fontSans = localFont({
  src: [
    { path: '../assets/fonts/HelveticaNeue-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../assets/fonts/HelveticaNeue-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/HelveticaNeue.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/HelveticaNeue-Light.woff2', weight: '300', style: 'normal' },
  ],
  variable: '--font-sans',
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Game articles', 'Articles', 'Game'],
  authors: [
    {
      name: 'Eduard Sysoev',
      url: 'https://vk.com/sysoeev',
    },
  ],
  creator: 'Eduard Sysoev',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
    </html>
  );
}
