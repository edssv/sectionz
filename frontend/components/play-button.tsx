'use client';

import { PlayerStatus } from '@/lib/types/types';
import { cn } from '@/lib/utils';
import usePlayerStore from '@/stores/use-player-store';

import { Icons } from './icons';
import { type ButtonProps, Button } from './ui/button';

interface PlayButtonProps extends ButtonProps {
  isPlaying?: boolean;
}

export function PlayButton({ children, isPlaying, ...props }: PlayButtonProps) {
  const { playerStatus } = usePlayerStore();

  const PlayIcon = isPlaying && playerStatus === PlayerStatus.PLAY ? Icons.pause : Icons.play;

  return (
    <Button {...props}>
      <PlayIcon className={cn('h-[0.8rem]', { 'mr-2': !!children })} />
      {children}
    </Button>
  );
}
