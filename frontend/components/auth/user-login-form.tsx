'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { cn } from '@/lib/utils';
import { userLoginSchema } from '@/lib/validations/auth';

import { Icons } from '../icons';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { toast } from '../ui/use-toast';

type UserLoginFormProps = React.HTMLAttributes<HTMLDivElement>;

type FormData = z.infer<typeof userLoginSchema>;

export function UserLoginForm({ className, ...props }: UserLoginFormProps) {
  const router = useRouter();
  const form = useForm<z.infer<typeof userLoginSchema>>({ resolver: zodResolver(userLoginSchema) });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVkLoading, setIsVkLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const searchParams = useSearchParams();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const signInResult = await signIn('credentials', {
      email: data.email.toLowerCase(),
      password: data.password,
      redirect: false,
      callbackUrl: searchParams?.get('from') || getPublicUrl.home()
    });

    setIsLoading(false);

    if (!signInResult?.ok) {
      setIsError(true);

      return toast({
        title: 'Что-то пошло не так.',
        description: 'Ваш запрос на вход не выполнен. Пожалуйста, попробуйте еще раз.',
        variant: 'destructive'
      });
    }

    return router.replace(searchParams?.get('from') || getPublicUrl.home());
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form className='grid gap-2' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    autoCapitalize='none'
                    autoComplete='email'
                    autoCorrect='off'
                    disabled={isLoading || isGoogleLoading}
                    id='email'
                    placeholder='name@example.com'
                    type='email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    autoCapitalize='none'
                    autoComplete='password'
                    autoCorrect='off'
                    disabled={isLoading || isGoogleLoading}
                    id='password'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isVkLoading || isGoogleLoading} isLoading={isLoading}>
            Войти с помощью почты
          </Button>
          {isError && (
            <Link className='text-center text-sm text-muted-foreground underline' href={getPublicUrl.passwordReset()}>
              Сбросить пароль
            </Link>
          )}
        </form>
      </Form>

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
          disabled={isGoogleLoading || isLoading}
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
          disabled={isVkLoading || isLoading}
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
    </div>
  );
}
