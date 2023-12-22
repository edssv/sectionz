'use client';

import { useEffect, useState } from 'react';

import usePlayingTrack from '@/hooks/use-playing-track';

import { LeftControls } from './left-controls';
import LeftControlsPlaceholder from './left-controls-placeholder';
import { MiddleControls } from './middle-controls';
import { ProgressBar } from './progress-bar';
import { ProgressBarPlaceholder } from './progress-bar-placeholder';
import { RightControls } from './right-controls';
import { RightControlsPlaceholder } from './right-controls-placeholder';

export function Player() {
  const [isClient, setIsClient] = useState(false);
  const trackPlaying = usePlayingTrack();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onMouseLeave = () => {
    const volumeSlider = document.getElementById('volume-slider');

    if (volumeSlider) {
      volumeSlider.style.opacity = '0';
    }
  };

  return (
    <div className='fixed bottom-0 z-50 hidden w-full lg:block' onMouseLeave={onMouseLeave}>
      <div className='group h-full'>
        {isClient ? <ProgressBar duration={trackPlaying?.attributes.duration || 0} /> : <ProgressBarPlaceholder />}
        <div className='flex h-player items-center justify-between bg-secondary px-6'>
          {isClient ? (
            <>
              <LeftControls duration={trackPlaying?.attributes.duration} />
              {trackPlaying ? <MiddleControls trackPlaying={trackPlaying} /> : null}
              <RightControls />
            </>
          ) : (
            <>
              <LeftControlsPlaceholder />
              <RightControlsPlaceholder />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
