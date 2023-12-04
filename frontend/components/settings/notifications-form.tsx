'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/components/ui/use-toast';
import { useUpdateUserNotificationsMutation } from '@/gql/types';
import { updateUserNotificationsFormSchema } from '@/lib/validations/settings';

type NotificationsFormValues = z.infer<typeof updateUserNotificationsFormSchema>;

interface NotificationsFormProps {
  data: Omit<NotificationsFormValues, 'securityEmails'>;
}

export function NotificationsForm({ data }: NotificationsFormProps) {
  const [updateNotifications, { loading }] = useUpdateUserNotificationsMutation();
  const form = useForm<NotificationsFormValues>({
    resolver: zodResolver(updateUserNotificationsFormSchema),
    defaultValues: {
      communicationEmails: data.communicationEmails,
      marketingEmails: data.marketingEmails,
      socialEmails: data.socialEmails,
      securityEmails: true
    }
  });

  async function onSubmit(data: NotificationsFormValues) {
    const { securityEmails, ...values } = data;
    await updateNotifications({ variables: { data: values } });

    toast({
      description: 'Настройки уведомлений изменены.'
    });

    form.reset(data);
  }

  return (
    <Form {...form}>
      <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <h3 className='mb-4 text-lg font-medium'>Уведомления по электронной почте</h3>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='communicationEmails'
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
              name='marketingEmails'
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
              name='socialEmails'
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
              name='securityEmails'
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

        <Button disabled={!form.formState.isDirty} isLoading={loading} type='submit'>
          Обновить уведомления
        </Button>
      </form>
    </Form>
  );
}
