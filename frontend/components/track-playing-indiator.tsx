import React, { useState } from 'react';

import { PlayerStatus } from '@/lib/types/types';
import { cn } from '@/lib/utils';
import usePlayerStore, { usePlayerAPI } from '@/stores/use-player-store';

import { Icons } from './icons';
import type { ButtonProps } from './ui/button';
import { Button } from './ui/button';

const getIcon = (state: PlayerStatus, hovered: boolean) => {
  if (state === PlayerStatus.PLAY) {
    if (hovered) {
      return <Icons.pause className='h-4 w-4' name='pause' />;
    }

    const defaultBar = 'h-3 w-0.5 items-baseline bg-primary';

    return (
      <div className='flex h-3 w-2 items-end justify-between gap-[1px]'>
        <div className={cn('animate-bar', defaultBar)} />
        <div className={cn('animate-bar delay-300', defaultBar)} />
        <div className={cn('animate-bar delay-150', defaultBar)} />
      </div>
    );
  }

  return <Icons.play className='h-4 w-4' name='play' />;
};

export default function TrackPlayingIndiator({ className, ...props }: ButtonProps) {
  const [hovered, setHovered] = useState(false);
  const { playerStatus } = usePlayerStore();
  const playerAPI = usePlayerAPI();

  const icon = getIcon(playerStatus, hovered);

  return (
    <Button
      className={cn('h-8 w-8 rounded-full p-0', className)}
      size='icon'
      tabIndex={0}
      variant='link'
      onClick={playerAPI.playPause}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {icon}
    </Button>
  );
}
