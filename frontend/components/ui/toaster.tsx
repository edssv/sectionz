'use client';

import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { usePlayer } from '@/hooks/use-player';
import { cn } from '@/lib/utils';

export function Toaster() {
  const { toasts } = useToast();
  const player = usePlayer();

  return (
    <ToastProvider>
      {toasts.map(({ action, description, id, title, ...props }) => (
        <Toast key={id} {...props}>
          <div className='grid gap-1'>
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
