import Image from 'next/image';
import React, { useState } from 'react';

import equaliserAnimated from '@/assets/images/equaliser-animated.gif';
import { cn } from '@/lib/utils';
import { usePlayerAPI } from '@/stores/use-player-store';

import { Icons } from './icons';
import type { ButtonProps } from './ui/button';
import { Button } from './ui/button';

interface TrackPlayingIndiatorProps extends ButtonProps {
  isPlaying: boolean;
  isCurrentTrack: boolean;
  start: () => void;
}

const getIcon = (isPlaying: boolean, hovered: boolean) => {
  if (isPlaying) {
    if (hovered) {
      return <Icons.pause className='h-[0.8rem]' name='pause' />;
    }

    return <Image className='brightness-0 dark:brightness-[1000]' height={14} src={equaliserAnimated.src} width={14} />;
  }

  return <Icons.play className='h-[0.8rem]' name='play' />;
};

export function TrackPlayingIndicator({
  className,
  isCurrentTrack,
  isPlaying,
  start,
  ...props
}: TrackPlayingIndiatorProps) {
  const [hovered, setHovered] = useState(false);
  const playerAPI = usePlayerAPI();

  const icon = getIcon(isPlaying && isCurrentTrack, hovered);

  return (
    <Button
      className={cn('hidden group-hover:flex', { flex: isPlaying && isCurrentTrack }, className)}
      size='icon'
      tabIndex={0}
      variant='link'
      onClick={isCurrentTrack ? playerAPI.playPause : start}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {icon}
    </Button>
  );
}
