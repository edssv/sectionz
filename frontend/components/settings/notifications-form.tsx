'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/components/ui/use-toast';
import { notificationsFormSchema } from '@/lib/validations/settings';
import { UserService } from '@/services/user/user.service';

type NotificationsFormValues = z.infer<typeof notificationsFormSchema>;

interface NotificationsFormProps {
  data: Omit<NotificationsFormValues, 'security_emails'>;
}

export function NotificationsForm({ data }: NotificationsFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues: {
      communication_emails: data.communication_emails,
      marketing_emails: data.marketing_emails,
      social_emails: data.social_emails,
      security_emails: true
    }
  });

  async function onSubmit(data: NotificationsFormValues) {
    setIsLoading(true);

    const res = await UserService.update(data);

    setIsLoading(false);

    if (!res.ok) {
      return toast({
        title: 'Что-то пошло не так.',
        description: 'Ваш запрос на обновление настроек уведомлений не выполнен. Пожалуйста, попробуйте еще раз.',
        variant: 'destructive'
      });
    }

    toast({
      description: 'Настройки уведомлений изменены.'
    });

    router.refresh();
  }

  return (
    <Form {...form}>
      <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <h3 className='mb-4 text-lg font-medium'>Уведомления по электронной почте</h3>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='communication_emails'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                  <div className='space-y-0.5'>
                    <FormLabel className='text-base'>Коммуникационные письма</FormLabel>
                    <FormDescription>Получайте электронные письма о деятельности вашей учетной записи.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='marketing_emails'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                  <div className='space-y-0.5'>
                    <FormLabel className='text-base'>Маркетинговые электронные письма</FormLabel>
                    <FormDescription>
                      Получайте электронные письма о новых продуктах, функциях и многом другом.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='social_emails'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                  <div className='space-y-0.5'>
                    <FormLabel className='text-base'>Социальные письма</FormLabel>
                    <FormDescription>
                      Получайте электронные письма с запросами на добавление в друзья, подписками и многим другим.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='security_emails'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                  <div className='space-y-0.5'>
                    <FormLabel className='text-base'>Электронные письма по вопросам безопасности</FormLabel>
                    <FormDescription>
                      Получайте электронные письма о деятельности и безопасности вашей учетной записи.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch aria-readonly disabled checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button isLoading={isLoading} type='submit'>
          Обновить уведомления
        </Button>
      </form>
    </Form>
  );
}
