'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { userEmailConfirmSchema } from '@/lib/validations/auth';
import { AuthService } from '@/services/auth/auth.service';

import { TypographyMuted } from '../../ui/typography-muted';

export function EmailConfirmationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const form = useForm<z.infer<typeof userEmailConfirmSchema>>({
    resolver: zodResolver(userEmailConfirmSchema)
  });

  const onSubmit = async (values: z.infer<typeof userEmailConfirmSchema>) => {
    setIsLoading(true);
    const res = await AuthService.forgotPassword(values.email);

    if (res.ok) {
      setIsComplete(true);
    }
    setIsLoading(false);
  };

  if (isComplete) {
    return (
      <p className='text-center leading-7'>
        Мы отправили вам электронное письмо. Просто следуйте инструкциям, чтобы сбросить пароль.
      </p>
    );
  }

  return (
    <div className='grid gap-6'>
      <TypographyMuted className='text-center'>
        Введите адрес электронной почты, который вы использовали при регистрации. <br /> Мы отправим вам электронное
        письмо на этот адрес с ссылкой для сброса пароля.
      </TypographyMuted>
      <Form {...form}>
        <form className='grid gap-4' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='name@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading} type='submit'>
            Отправить
          </Button>
        </form>
      </Form>
    </div>
  );
}
