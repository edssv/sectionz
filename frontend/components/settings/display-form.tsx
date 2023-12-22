'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/components/ui/use-toast';
import { languages } from '@/lib/data/languages';
import { cn } from '@/lib/utils';
import { displayFormSchema } from '@/lib/validations/settings';

type DisplayFormValues = z.infer<typeof displayFormSchema>;

export function DisplayForm() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const form = useForm<DisplayFormValues>({
    resolver: zodResolver(displayFormSchema),
    defaultValues: {
      language: 'ru',
      theme: isClient ? theme : ''
    }
  });

  function onSubmit(data: DisplayFormValues) {
    setTheme(data.theme);

    toast({
      description: 'Настройки дисплея изменены.'
    });

    router.refresh();
  }

  return (
    <Form {...form}>
      <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='language'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Язык</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      className={cn('w-[200px] justify-between', !field.value && 'text-muted-foreground')}
                      role='combobox'
                      variant='outline'
                    >
                      {field.value
                        ? languages.find((language) => language.value === field.value)?.label
                        : 'Select language'}
                      <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0'>
                  <Command>
                    <CommandGroup>
                      {languages.map((language) => (
                        <CommandItem
                          key={language.value}
                          value={language.label}
                          onSelect={() => {
                            form.setValue('language', language.value);
                          }}
                        >
                          <CheckIcon
                            className={cn('mr-2 h-4 w-4', language.value === field.value ? 'opacity-100' : 'opacity-0')}
                          />
                          {language.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>Это язык, который будет использоваться в приложении.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='theme'
          render={({ field }) => (
            <FormItem className='space-y-1'>
              <FormLabel>Тема</FormLabel>
              <FormDescription>Выберите тему приложения.</FormDescription>
              <FormMessage />
              <RadioGroup
                className='grid max-w-md grid-cols-2 gap-8 pt-2'
                defaultValue={field.value}
                onValueChange={field.onChange}
              >
                <FormItem>
                  <FormLabel className='[&:has([data-state=checked])>div]:border-primary'>
                    <FormControl>
                      <RadioGroupItem className='sr-only' value='light' />
                    </FormControl>
                    <div className='items-center rounded-md border-2 border-muted p-1 hover:border-accent'>
                      <div className='space-y-2 rounded-sm bg-[#ecedef] p-2'>
                        <div className='space-y-2 rounded-md bg-white p-2 shadow-sm'>
                          <div className='h-2 w-[80px] rounded-lg bg-[#ecedef]' />
                          <div className='h-2 w-[100px] rounded-lg bg-[#ecedef]' />
                        </div>
                        <div className='flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm'>
                          <div className='h-4 w-4 rounded-full bg-[#ecedef]' />
                          <div className='h-2 w-[100px] rounded-lg bg-[#ecedef]' />
                        </div>
                        <div className='flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm'>
                          <div className='h-4 w-4 rounded-full bg-[#ecedef]' />
                          <div className='h-2 w-[100px] rounded-lg bg-[#ecedef]' />
                        </div>
                      </div>
                    </div>
                    <span className='block w-full p-2 text-center font-normal'>Светлая</span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className='[&:has([data-state=checked])>div]:border-primary'>
                    <FormControl>
                      <RadioGroupItem className='sr-only' value='dark' />
                    </FormControl>
                    <div className='items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground'>
                      <div className='space-y-2 rounded-sm bg-neutral-950 p-2'>
                        <div className='space-y-2 rounded-md bg-neutral-800 p-2 shadow-sm'>
                          <div className='h-2 w-[80px] rounded-lg bg-neutral-400' />
                          <div className='h-2 w-[100px] rounded-lg bg-neutral-400' />
                        </div>
                        <div className='flex items-center space-x-2 rounded-md bg-neutral-800 p-2 shadow-sm'>
                          <div className='h-4 w-4 rounded-full bg-neutral-400' />
                          <div className='h-2 w-[100px] rounded-lg bg-neutral-400' />
                        </div>
                        <div className='flex items-center space-x-2 rounded-md bg-neutral-800 p-2 shadow-sm'>
                          <div className='h-4 w-4 rounded-full bg-neutral-400' />
                          <div className='h-2 w-[100px] rounded-lg bg-neutral-400' />
                        </div>
                      </div>
                    </div>
                    <span className='block w-full p-2 text-center font-normal'>Темная</span>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />
        <Button className='w-full lg:w-auto' disabled={!form.formState.isDirty} type='submit'>
          Обновить дисплей
        </Button>
      </form>
    </Form>
  );
}
