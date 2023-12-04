import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

import { UserRegisterForm } from '@/components/auth/register/user-register-form';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { authCovers } from '@/lib/data/auth-covers';
import { slogans } from '@/lib/data/slogans';
import { absoluteUrlStrapi, cn } from '@/lib/utils';

export const metadata = {
  title: 'Создать аккаунт',
  description: 'Создайте учетную запись, чтобы начать.'
};

const Bg = memo(() => (
  <div className='relative hidden h-full w-full bg-zinc-900 lg:block'>
    <div className='absolute left-0 top-0 z-10 flex items-center gap-3 p-8'>
      <Image
        priority
        alt={`${siteConfig.name}`}
        height={36}
        sizes='25vw'
        src={`${siteConfig.url}/android-chrome-192x192.png`}
        width={36}
      />
      <h2 className='text-lg font-semibold text-white'>{siteConfig.name}</h2>
    </div>
    <p className='absolute bottom-0 left-0 z-10 w-2/3 p-8 text-lg text-white'>
      {slogans[Math.floor(Math.random() * slogans.length)]}
    </p>
    <Image
      priority
      alt='cover'
      className='h-screen w-full object-cover brightness-50'
      height={0}
      sizes='100vw'
      src={absoluteUrlStrapi(authCovers[Math.floor(Math.random() * authCovers.length)])}
      width={0}
    />
  </div>
));

export default function RegisterPage() {
  return (
    <div className='container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <Link
        className={cn(buttonVariants({ variant: 'ghost' }), 'absolute right-4 top-4 md:right-8 md:top-8')}
        href='/login'
      >
        Войти
      </Link>
      <Bg />
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <UserRegisterForm />
        </div>
      </div>
    </div>
  );
}
