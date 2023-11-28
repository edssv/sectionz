import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import { useRegister } from '@/hooks/useRegister';
import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { cn } from '@/lib/utils';
import { userRegisterEmailSchema } from '@/lib/validations/auth';

import { Icons } from '../../icons';
import { Alert, AlertDescription, AlertTitle } from '../../ui/alert';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';

import type { RegisterFormProps } from './user-register-form';

type FormData = z.infer<typeof userRegisterEmailSchema>;

export function EmailStep({ className }: RegisterFormProps) {
  const { setStep, setValue, step } = useRegister();
  const form = useForm<FormData>({
    mode: 'onTouched',
    resolver: zodResolver(userRegisterEmailSchema)
  });

  const onSubmit = (formData: FormData) => {
    setValue({ email: formData.email });
    setStep(step + 1);
  };

  return (
    <Form {...form}>
      <form className={cn('grid gap-4', className)} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  autoCapitalize='none'
                  autoComplete='email'
                  autoCorrect='off'
                  id='email'
                  placeholder='name@example.com'
                  type='email'
                  {...field}
                />
              </FormControl>
              <FormMessage />
              {form.formState.errors.email?.type === 'custom' ? (
                <Alert variant='destructive'>
                  {' '}
                  <Icons.warning className='h-4 w-4' />
                  <AlertTitle>Адрес занят</AlertTitle>
                  <AlertDescription>
                    Этот адрес уже связан с существующей учетной записью. Чтобы продолжить,{' '}
                    <Link className='underline' href={getPublicUrl.login()}>
                      войдите в систему
                    </Link>
                    .
                  </AlertDescription>
                </Alert>
              ) : null}
            </FormItem>
          )}
        />
        <Button>Далее</Button>
      </form>
    </Form>
  );
}
