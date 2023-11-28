import localFont from 'next/font/local';

export const fontSans = localFont({
  src: [
    { path: '../assets/fonts/HelveticaNeue-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../assets/fonts/HelveticaNeue-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/HelveticaNeue.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/HelveticaNeue-Light.woff2', weight: '300', style: 'normal' }
  ],
  variable: '--font-sans'
});
