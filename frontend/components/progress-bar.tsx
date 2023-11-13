'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface ProgressBarProps {
  leftValue: string;
  rightValue: string;
}

export function ProgressBar({ leftValue, rightValue }: ProgressBarProps) {
  return (
    <div className='-mx-8'>
      <SliderPrimitive.Root
        className={cn('relative  flex w-full touch-none select-none items-center')}
        defaultValue={[333]}
        max={1000}
        step={1}
      >
        <SliderPrimitive.Track className='relative h-3 w-full grow overflow-hidden bg-black/20'>
          <SliderPrimitive.Range className='absolute h-full bg-primary' />
        </SliderPrimitive.Track>
        {/* <SliderPrimitive.Thumb className='block h-4 w-4 rounded-full border border-black/10 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50' /> */}
        <div className='absolute top-0 hidden h-full w-full touch-none select-none items-center justify-between group-hover:flex'>
          <div className='ml-2 text-[11px]'>{leftValue}</div>
          <div className='mr-2 text-[11px]'>{rightValue}</div>
        </div>
      </SliderPrimitive.Root>
    </div>
  );
}
