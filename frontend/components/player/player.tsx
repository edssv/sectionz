'use client';

import { useState } from 'react';

import usePlayingTrack from '@/hooks/use-playing-track';

import { LeftControls } from './left-controls';
import { MiddleControls } from './middle-controls';
import { ProgressBar } from './progress-bar';
import { RightControls } from './right-controls';

export function Player() {
  const trackPlaying = usePlayingTrack();
  const [showVolume, setShowVolume] = useState(false);

  if (!trackPlaying) {
    return null;
  }

  return (
    <div className='fixed bottom-0 z-50 hidden w-full lg:block' onMouseLeave={() => setShowVolume(false)}>
      <div className='group h-full'>
        <ProgressBar trackPlaying={trackPlaying} />
        <div className='flex h-player items-center justify-between bg-secondary px-6'>
          <LeftControls trackPlaying={trackPlaying} />
          <MiddleControls trackPlaying={trackPlaying} />
          <RightControls setShowVolume={setShowVolume} showVolume={showVolume} />
        </div>
      </div>
    </div>
  );
}
