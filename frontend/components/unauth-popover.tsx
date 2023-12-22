import type { PopoverContentProps } from '@radix-ui/react-popover';
import { useRouter } from 'next/navigation';

import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { cn } from '@/lib/utils';

import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface UnauthPopoverProps extends PopoverContentProps {
  title?: string;
  description: string;
}

export function UnauthPopover({
  children,
  className,
  description,
  title = 'Войдите в аккаунт',
  ...props
}: UnauthPopoverProps) {
  const router = useRouter();

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className={cn('w-80 border-none bg-[#0d72ea] text-white', className)} {...props}>
        <div className='heading mb-2 text-lg font-bold'>{title}</div>
        <p className='text-sm'>{description}</p>
        <div className='mt-6 flex justify-end gap-2'>
          <Button className='!no-underline' size='sm' variant='link' onClick={() => router.push(getPublicUrl.login())}>
            Не сейчас
          </Button>
          <Button className='bg-white text-black' size='sm' onClick={() => router.push(getPublicUrl.login())}>
            Войти
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
