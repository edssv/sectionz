'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TypographyMuted } from '@/components/ui/typography-muted';
import { userResetPasswordSchema } from '@/lib/validations/auth';
import { AuthService } from '@/services/auth/auth.service';

interface ResetPasswordProps {
  code: string;
}
export function ResetPasswordForm({ code }: ResetPasswordProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const form = useForm<z.infer<typeof userResetPasswordSchema>>({
    mode: 'onTouched',
    resolver: zodResolver(userResetPasswordSchema),
    defaultValues: {
      code
    }
  });

  const onSubmit = async (values: z.infer<typeof userResetPasswordSchema>) => {
    setIsLoading(true);
    const res = await AuthService.resetPassword(values);

    if (res) {
      setIsComplete(true);
    }

    setIsLoading(false);
  };

  if (isComplete) {
    return <p className='text-center leading-7'>Ваш новый пароль установлен, теперь вы можете войти в систему.</p>;
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
            name='passwords.password'
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
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='passwords.passwordConfirmation'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Повторите новый пароль</FormLabel>
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
              </FormItem>
            )}
          />
          <Button disabled={!form.formState.isValid || isLoading} type='submit'>
            Отправить
          </Button>
        </form>
      </Form>
    </div>
  );
}
