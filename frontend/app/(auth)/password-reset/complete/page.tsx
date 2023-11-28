import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ResetPasswordForm } from '@/components/auth/reset-password/reset-password-form';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Сброс пароля'
};

interface PasswordResetCompletePageProps {
  searchParams: { code: string };
}

export default function PasswordResetCompletePage({ searchParams }: PasswordResetCompletePageProps) {
  return (
    <div className='container flex h-screen w-screen flex-col items-center justify-center'>
      <Link
        className={cn(buttonVariants({ variant: 'ghost' }), 'absolute left-4 top-4 md:left-8 md:top-8')}
        href={getPublicUrl.login()}
      >
        <>
          <Icons.chevronLeft className='mr-2 h-4 w-4' />
          Назад
        </>
      </Link>
      <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <Image
            alt={`${siteConfig.name}`}
            className='mx-auto h-10 w-10'
            height={40}
            sizes='25vw'
            src={`${siteConfig.url}/android-chrome-192x192.png`}
            width={40}
          />
          <h1 className='text-2xl font-semibold tracking-tight'>Сброс пароля</h1>
        </div>
        <ResetPasswordForm code={searchParams?.code} />
      </div>
    </div>
  );
}
