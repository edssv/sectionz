'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import type { TrackFragment } from '@/gql/types';
import usePlayingTrackCurrentTime from '@/hooks/use-playing-track-current-time';
import { cn, parseDuration } from '@/lib/utils';
import { usePlayerAPI } from '@/stores/use-player-store';

interface ProgressBarProps {
  trackPlaying: TrackFragment;
}

export function ProgressBar({ trackPlaying }: ProgressBarProps) {
  const elapsed = usePlayingTrackCurrentTime();
  const playerAPI = usePlayerAPI();

  const jumpAudioTo = React.useCallback(
    (values: number[]) => {
      const [to] = values;

      playerAPI.jumpTo(to);
    },
    [playerAPI]
  );

  const [tooltipTargetTime, setTooltipTargetTime] = React.useState<null | number>(null);
  const [tooltipX, setTooltipX] = React.useState<null | number>(null);

  const showTooltip = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const { offsetX } = e.nativeEvent;
      const barWidth = e.currentTarget.offsetWidth;

      const percent = (offsetX / barWidth) * 100;

      const time = (percent * trackPlaying.attributes.duration) / 100;

      setTooltipTargetTime(time);
      setTooltipX(percent);
    },
    [trackPlaying]
  );

  const hideTooltip = React.useCallback(() => {
    setTooltipTargetTime(null);
    setTooltipX(null);
  }, []);

  return (
    <SliderPrimitive.Root
      aria-disabled='false'
      aria-label='Ползунок прокрутки'
      defaultValue={[0]}
      max={trackPlaying.attributes.duration}
      role='slider'
      step={1}
      tabIndex={0}
      title='Ползунок прокрутки'
      value={[elapsed]}
      className={cn(
        'group/slider absolute top-0 flex h-8 w-full -translate-y-1/2 cursor-pointer touch-none select-none items-center'
      )}
      onMouseDown={showTooltip}
      onMouseLeave={hideTooltip}
      onMouseMove={showTooltip}
      onValueChange={jumpAudioTo}
    >
      {tooltipX !== null && (
        <div
          className='pointer-events-none absolute bottom-7 -translate-x-1/2  overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95'
          style={{ left: `${tooltipX}%` }}
        >
          {parseDuration(tooltipTargetTime)}
        </div>
      )}
      <SliderPrimitive.Track className='relative h-0.5 w-full grow overflow-hidden bg-border group-hover/slider:h-1'>
        <SliderPrimitive.Range className='absolute h-full bg-primary' />
      </SliderPrimitive.Track>
      {/* <SliderPrimitive.Thumb
          className='opacity-0! m-2.5 block h-3 w-3 rounded-full border border-primary/30 bg-primary shadow transition-all focus-visible:outline-none active:!scale-150 disabled:pointer-events-none disabled:opacity-50 group-hover/slider:scale-[1.2] group-hover:opacity-100'
          tabIndex={-1}
        /> */}
    </SliderPrimitive.Root>
  );
}
