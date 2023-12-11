'use client';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import { buttonVariants, type ButtonProps } from './ui/button';

interface PlayButtonProps extends ButtonProps {
  isPlaying: boolean;
}

export function PlayButton({ children, className, isPlaying, variant, ...props }: PlayButtonProps) {
  const PlayIcon = isPlaying ? Icons.pause : Icons.play;

  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      <PlayIcon className={cn('h-[0.8rem]', { 'mr-2': !!children })} />
      {children}
    </button>
  );
}
