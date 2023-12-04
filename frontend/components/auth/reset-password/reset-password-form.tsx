'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TypographyMuted } from '@/components/ui/typography-muted';
import { formConfig } from '@/config/form';
import { useResetPasswordMutation } from '@/gql/types';
import { userResetPasswordSchema } from '@/lib/validations/auth';

interface ResetPasswordProps {
  code: string;
}
export function ResetPasswordForm({ code }: ResetPasswordProps) {
  const [resetPassword, { loading }] = useResetPasswordMutation();
  const [isComplete, setIsComplete] = useState(false);
  const form = useForm<z.infer<typeof userResetPasswordSchema>>({
    mode: 'onTouched',
    resolver: zodResolver(userResetPasswordSchema),
    defaultValues: {
      code
    }
  });

  const onSubmit = async (values: z.infer<typeof userResetPasswordSchema>) => {
    const res = await resetPassword({ variables: values });

    if (res.data?.resetPassword) {
      setIsComplete(true);
      signIn('credentials', {
        email: res.data.resetPassword.user.email.toLowerCase(),
        password: values.password,
        redirect: false
      });
    }
  };

  if (isComplete) {
    return <p className='text-center leading-7'>Ваш новый пароль установлен, и вы вошли в систему.</p>;
  }

  return (
    <div className='space-y-6'>
      <TypographyMuted className='text-center'>Для сброса пароля введите новый пароль и повторите его.</TypographyMuted>
      <Form {...form}>
        <form className='grid gap-4' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='code'
            render={({ field }) => (
              <FormItem className='hidden'>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Новый пароль</FormLabel>
                <FormControl>
                  <Input
                    autoCapitalize='none'
                    autoComplete='password'
                    autoCorrect='off'
                    id='password'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>{formConfig.password.description}</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='passwordConfirmation'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Подтверждение нового пароля</FormLabel>
                <FormControl>
                  <Input
                    autoCapitalize='none'
                    autoComplete='password'
                    autoCorrect='off'
                    id='password'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>{formConfig.passwordConfirmation.description}</FormDescription>
              </FormItem>
            )}
          />
          <Button isLoading={loading} type='submit'>
            Отправить
          </Button>
        </form>
      </Form>
    </div>
  );
}
