'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { Icons } from '@/components/icons';
import { toast } from '@/components/ui/use-toast';
import { siteConfig } from '@/config/site';
import { useRegister } from '@/hooks/useRegister';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { cn } from '@/lib/utils';
import { userRegisterConfirmSchema } from '@/lib/validations/auth';
import { AuthService } from '@/services/auth/auth.service';

import { Button } from '../../ui/button';
import { Checkbox } from '../../ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '../../ui/form';

import type { RegisterFormProps } from './user-register-form';

type FormData = z.infer<typeof userRegisterConfirmSchema>;

export function ConfirmStep({ className }: RegisterFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { registerState, setValue } = useRegister();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(userRegisterConfirmSchema)
  });

  const onSubmit = async (formData: FormData) => {
    setValue({ marketing_emails: formData.marketing_emails });

    setIsLoading(true);

    await AuthService.register({ ...registerState, ...formData });

    const signInResult = await signIn('credentials', {
      email: registerState?.email?.toLowerCase(),
      password: registerState.password,
      redirect: false,
      callbackUrl: searchParams?.get('from') || getPublicUrl.home()
    });

    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast({
        title: 'Что-то пошло не так.',
        description: 'Ваш запрос на вход не выполнен. Пожалуйста, попробуйте еще раз.',
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
          name='marketing_emails'
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
        <Button disabled={isLoading}>
          {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />} Создать аккаунт
        </Button>
      </form>
    </Form>
  );
}
