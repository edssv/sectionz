'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { useRegister } from '@/hooks/useRegister';
import { cn, formatDate } from '@/lib/utils';
import { userRegisterInfoSchema } from '@/lib/validations/auth';

import { Icons } from '../../icons';
import { Button } from '../../ui/button';
import { Calendar } from '../../ui/calendar';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';

import type { RegisterFormProps } from './user-register-form';

type FormData = z.infer<typeof userRegisterInfoSchema>;

export function InfoStep({ className }: RegisterFormProps) {
  const { registerState, setStep, setValue, step } = useRegister();
  const form = useForm<FormData>({
    mode: 'onTouched',
    resolver: zodResolver(userRegisterInfoSchema)
  });

  const onSubmit = (formData: FormData) => {
    setValue(formData);
    setStep(step + 1);
  };

  return (
    <Form {...form}>
      <form className={cn('grid gap-4', className)} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='profile_name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя профиля</FormLabel>
              <FormControl>
                <Input autoCapitalize='none' autoComplete='name' autoCorrect='off' id='name' type='name' {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription>Это имя появится в вашем профиле</FormDescription>
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
                      className={cn('pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                      variant='outline'
                    >
                      {field.value ? formatDate(field.value) : <span>Выберите дату</span>}
                      <Icons.calendar className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align='start' className='w-auto p-0'>
                  <Calendar
                    captionLayout='dropdown-buttons'
                    disabled={(date: Date) => date > new Date() || date < new Date('1900-01-01')}
                    fromYear={1900}
                    mode='single'
                    selected={registerState.dob}
                    toYear={new Date().getFullYear()}
                    onSelect={(val) => {
                      field.onChange(val);
                      setValue({ dob: val });
                    }}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
              <FormDescription>Дата рождения используется для расчета вашего возраста.</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='gender'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пол</FormLabel>
              <FormControl>
                <RadioGroup
                  className='flex flex-wrap items-center gap-x-4 gap-y-3.5'
                  defaultValue={field.value}
                  onValueChange={(val: FormData['gender']) => {
                    field.onChange(val);
                    setValue({ gender: val });
                  }}
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='man' />
                    </FormControl>
                    <FormLabel className='font-normal'>Мужской</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='woman' />
                    </FormControl>
                    <FormLabel className='font-normal'>Женский</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='something_else' />
                    </FormControl>
                    <FormLabel className='font-normal'>Другой</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='prefer_not_to_say' />
                    </FormControl>
                    <FormLabel className='font-normal'>Предпочитаю не говорить</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
              <FormDescription>
                Мы используем ваш пол, чтобы персонализировать для вас наши рекомендации.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button>Далее</Button>
      </form>
    </Form>
  );
}
