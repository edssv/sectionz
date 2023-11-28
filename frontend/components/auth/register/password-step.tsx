import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import { useRegister } from '@/hooks/useRegister';
import { cn } from '@/lib/utils';
import { userRegisterPasswordSchema } from '@/lib/validations/auth';

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';

import type { RegisterFormProps } from './user-register-form';

type FormData = z.infer<typeof userRegisterPasswordSchema>;

export function PasswordStep({ className }: RegisterFormProps) {
  const { setStep, setValue, step } = useRegister();
  const form = useForm<FormData>({
    mode: 'onTouched',
    resolver: zodResolver(userRegisterPasswordSchema)
  });

  const onSubmit = (formData: FormData) => {
    setValue({ password: formData.password });

    setStep(step + 1);
  };

  return (
    <Form {...form}>
      <form className={cn('grid gap-4', className)} onSubmit={form.handleSubmit(onSubmit)}>
        {' '}
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
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
              <FormDescription>
                Пароль должен содержать не менее 8 символов. Мы рекомендуем включать как минимум 1 цифру и 1 специальный
                символ.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button>Далее</Button>
      </form>
    </Form>
  );
}
