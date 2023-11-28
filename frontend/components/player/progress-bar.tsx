'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { usePlayer } from '@/hooks/usePlayer';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  changeCurrentTime: (value: number) => void;
}

export function ProgressBar({ changeCurrentTime }: ProgressBarProps) {
  const player = usePlayer();
  return (
    <SliderPrimitive.Root
      className={cn('group/slider absolute top-0 flex h-8 w-full -translate-y-1/2 touch-none select-none items-center')}
      defaultValue={[0]}
      max={player.duration}
      step={0.01}
      title='Ползунок прокрутки'
      value={[player.currentTime]}
      onValueChange={(values) => changeCurrentTime(values[0])}
    >
      <SliderPrimitive.Track className='relative h-0.5 w-full grow overflow-hidden bg-primary/30 group-hover/slider:h-1'>
        <SliderPrimitive.Range className='absolute h-full bg-primary' />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className='m-2.5 block h-3 w-3 rounded-full border border-primary/30 bg-primary shadow focus-visible:outline-none active:!scale-150 active:transition-all disabled:pointer-events-none disabled:opacity-50 group-hover/slider:scale-110 group-hover:opacity-100' />
    </SliderPrimitive.Root>
  );
}
