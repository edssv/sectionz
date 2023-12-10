'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import type { MeFragment } from '@/gql/types';
import { useUpdateUserProfileMutation } from '@/gql/types';
import { cn, formatDate } from '@/lib/utils';
import { updateUserProfileFormSchema } from '@/lib/validations/account';

import { Icons } from '../icons';

interface ProfileFormProps {
  data: Pick<MeFragment, 'profileName' | 'dob' | 'gender'>;
}

type UpdateUserProfileValues = z.infer<typeof updateUserProfileFormSchema>;

export function ProfileForm({ data }: ProfileFormProps) {
  const [updateProfile, { loading }] = useUpdateUserProfileMutation();

  const form = useForm<UpdateUserProfileValues>({
    mode: 'onTouched',
    resolver: zodResolver(updateUserProfileFormSchema),
    defaultValues: {
      profileName: data.profileName,
      gender: data.gender,
      dob: new Date(data.dob)
    }
  });

  async function onSubmit(data: UpdateUserProfileValues) {
    await updateProfile({ variables: { data } });

    toast({
      description: 'Настройки профиля изменены.'
    });

    form.reset(data);
  }

  return (
    <Form {...form}>
      <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='profileName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя профиля</FormLabel>
              <FormControl>
                <Input placeholder='Ваше имя' {...field} />
              </FormControl>
              <FormDescription>Это имя будет отображаться в вашем профиле и в электронных письмах.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='dob'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Дата рождения</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      className={cn('w-[278px] pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                      variant='outline'
                    >
                      {field.value ? formatDate(field.value) : <span>Выберите дату</span>}
                      <Icons.calendar className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align='start' className='w-auto p-0'>
                  <Calendar
                    initialFocus
                    captionLayout='dropdown-buttons'
                    disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                    fromYear={1900}
                    mode='single'
                    selected={field.value}
                    toYear={new Date().getFullYear()}
                    onSelect={field.onChange}
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>Дата рождения используется для расчета вашего возраста.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='gender'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пол</FormLabel>
              <Select defaultValue={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a verified email to display' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='man'>Мужской</SelectItem>
                  <SelectItem value='woman'>Женский</SelectItem>
                  <SelectItem value='something_else'>Другой</SelectItem>
                  <SelectItem value='prefer_not_to_say'>Предпочитаю не говорить</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Мы используем ваш пол, чтобы персонализировать для вас наши рекомендации.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={!form.formState.isDirty} isLoading={loading} type='submit'>
          Обновить аккаунт
        </Button>
      </form>
    </Form>
  );
}
