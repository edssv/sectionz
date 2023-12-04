'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { formConfig } from '@/config/form';
import { useChangePasswordMutation } from '@/gql/types';
import { changePasswordFormSchema } from '@/lib/validations/settings';

import { Input } from '../ui/input';

type ChangePasswordValues = z.infer<typeof changePasswordFormSchema>;

export function ChangePasswordForm() {
  const [changePassword, { loading }] = useChangePasswordMutation();
  const form = useForm<ChangePasswordValues>({
    mode: 'onTouched',
    resolver: zodResolver(changePasswordFormSchema),
    defaultValues: {
      currentPassword: '',
      password: '',
      passwordConfirmation: ''
    }
  });

  async function onSubmit(data: ChangePasswordValues) {
    await changePassword({
      variables: data
    });

    toast({
      description: 'Пароль изменен.'
    });

    form.reset(data);
  }

  return (
    <Form {...form}>
      <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <h3 className='mb-4 text-lg font-medium'>Смена пароля</h3>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='currentPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Текущий пароль</FormLabel>
                  <FormControl>
                    <Input type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>Ваш пароль на данный момент</FormDescription>
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
                    <Input type='password' {...field} />
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
                    <Input type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription> {formConfig.passwordConfirmation.description}</FormDescription>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button disabled={!form.formState.isDirty} isLoading={loading} type='submit'>
          Обновить пароль
        </Button>
      </form>
    </Form>
  );
}
