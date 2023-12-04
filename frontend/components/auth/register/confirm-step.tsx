'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { toast } from '@/components/ui/use-toast';
import { siteConfig } from '@/config/site';
import { useRegisterMutation } from '@/gql/types';
import { useRegister } from '@/hooks/use-register';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { cn } from '@/lib/utils';
import { userRegisterConfirmSchema } from '@/lib/validations/auth';

import { Button } from '../../ui/button';
import { Checkbox } from '../../ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '../../ui/form';

import type { RegisterFormProps } from './user-register-form';

type FormData = z.infer<typeof userRegisterConfirmSchema>;

export function ConfirmStep({ className }: RegisterFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [register, { loading }] = useRegisterMutation();
  const { registerState, setValue } = useRegister();
  const form = useForm<FormData>({
    resolver: zodResolver(userRegisterConfirmSchema)
  });

  const onSubmit = async (formData: FormData) => {
    setValue({ marketingEmails: formData.marketingEmails });

    await register({
      variables: {
        input: {
          ...registerState,
          ...formData,
          ...{ username: `${registerState?.email.split('@')[0]}_${Math.floor(Math.random() * 1000)}` }
        }
      }
    });

    const signInResult = await signIn('credentials', {
      email: registerState?.email?.toLowerCase(),
      password: registerState.password,
      redirect: false,
      callbackUrl: searchParams?.get('from') || getPublicUrl.home()
    });

    if (!signInResult?.ok) {
      return toast({
        title: 'Что-то пошло не так.',
        description: 'Ваш запрос на регистрацию не выполнен. Пожалуйста, попробуйте еще раз.',
        variant: 'destructive'
      });
    }

    router.replace(searchParams?.get('from') || getPublicUrl.home());
    return router.refresh();
  };

  return (
    <Form {...form}>
      <form className={cn('grid gap-4', className)} onSubmit={form.handleSubmit(onSubmit)}>
        {' '}
        <FormField
          control={form.control}
          name='marketingEmails'
          render={({ field }) => (
            <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow'>
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className='space-y-1 leading-none'>
                <FormLabel>Присылать мне новости и предложения от {siteConfig.name}</FormLabel>
                <FormDescription>Вы сможете всегда изменить этот пункт в настройках профиля.</FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button isLoading={loading}>Создать аккаунт</Button>
      </form>
    </Form>
  );
}
