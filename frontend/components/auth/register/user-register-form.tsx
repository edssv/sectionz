'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';
import * as React from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { registerStepsConfig } from '@/config/auth';
import { useRegister } from '@/hooks/use-register';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { cn } from '@/lib/utils';

import { Progress } from '../../ui/progress';
import { TypographyMuted } from '../../ui/typography-muted';

import { ConfirmStep } from './confirm-step';
import { EmailStep } from './email-step';
import { InfoStep } from './info-step';
import { PasswordStep } from './password-step';

export interface RegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserRegisterForm({ className, ...props }: RegisterFormProps) {
  const { reset, setStep, step } = useRegister();

  const [isVkLoading, setIsVkLoading] = React.useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState(false);

  React.useEffect(() => () => reset(), [reset]);

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      {step === 0 ? (
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>Создать аккаунт</h1>
          <p className='text-sm text-muted-foreground'>
            Введите адрес электронной почты ниже, чтобы создать учетную запись
          </p>
        </div>
      ) : (
        <div className='space-y-2'>
          <div className='flex gap-2 sm:-mx-[44px]'>
            <Button className='text-muted-foreground' size='icon' variant='ghost' onClick={() => setStep(step - 1)}>
              <Icons.chevronLeft />
            </Button>
            <div>
              <span className='font-medium leading-none tracking-tight'>
                {registerStepsConfig.steps[step - 1].description}
              </span>
              <TypographyMuted>Шаг {step} из 3</TypographyMuted>
            </div>
          </div>
          <Progress className='h-0.5' value={step * 33.333} />
        </div>
      )}
      <EmailStep className={cn({ hidden: step !== 0 })} />
      <PasswordStep className={cn({ hidden: step !== 1 })} />
      <InfoStep className={cn({ hidden: step !== 2 })} />
      <ConfirmStep className={cn({ hidden: step !== 3 })} />
      {step === 0 ? (
        <>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-background px-2 text-muted-foreground'>Или продолжить с</span>
            </div>
          </div>

          <div className='grid gap-2'>
            <Button
              className='bg-[rgb(0,119,255)] text-white hover:bg-[rgb(0,110,255)] hover:no-underline'
              disabled={isGoogleLoading}
              isLoading={isVkLoading}
              type='button'
              onClick={() => {
                setIsVkLoading(true);
                signIn('vk');
              }}
            >
              <Icons.vk className='mr-2 h-4 w-4' />
              VK ID
            </Button>
            <Button
              disabled={isVkLoading}
              isLoading={isGoogleLoading}
              type='button'
              variant='outline'
              onClick={() => {
                setIsGoogleLoading(true);
                signIn('google');
              }}
            >
              <Icons.google className='mr-2 h-4 w-4' />
              Google
            </Button>
          </div>
        </>
      ) : null}
      {step === 3 && (
        <p className='text-center text-sm text-muted-foreground'>
          Нажимая создать аккаунт, вы соглашаетесь с нашими{' '}
          <Link className='hover:text-brand underline underline-offset-4' href={getPublicUrl.terms()}>
            Условия использования
          </Link>{' '}
          и{' '}
          <Link className='hover:text-brand underline underline-offset-4' href={getPublicUrl.privacy()}>
            Политика конфиденциальности
          </Link>
          .
        </p>
      )}
    </div>
  );
}
