/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect, useRef } from 'react';

import { usePlayer } from '@/hooks/usePlayer';
import type { Track } from '@/interfaces/strapi-track';

import { LeftControls } from './left-controls';
import { MiddleControls } from './middle-controls';
import { ProgressBar } from './progress-bar';
import { RightControls } from './right-controls';

interface PlayerContentProps {
  track: Track | undefined;
  trackUrl: string;
}

export function PlayerContent({ track, trackUrl }: PlayerContentProps) {
  const player = usePlayer();
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    player.setIsPlaying(true);
  }, []);

  useEffect(() => {
    if (ref.current) {
      if (player.isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }, [player.isPlaying]);

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = player.isMuted ? 0 : player.volume / 100;
    }
  }, [player]);

  const onPlayNext = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];

    if (!nextSong) {
      return player.setId(player.ids[0]);
    }

    player.setId(nextSong);
  };

  const onEnded = () => {
    player.setIsPlaying(false);
    onPlayNext();
  };

  const onTimeUpdate = () => {
    if (ref.current) {
      player.setDuration(ref.current?.duration);
      player.setCurrentTime(ref.current.currentTime);
    }
  };

  const onChangeCurrentTime = (value: number) => {
    if (ref.current) {
      ref.current.currentTime = value;
      player.setCurrentTime(value);
    }
  };

  return (
    <div className='group h-full'>
      <audio ref={ref} loop={false} preload='metadata' src={trackUrl} onEnded={onEnded} onTimeUpdate={onTimeUpdate}>
        <track kind='captions' />
      </audio>
      <ProgressBar changeCurrentTime={onChangeCurrentTime} />
      <div className='flex h-player items-center justify-between bg-secondary px-6'>
        <LeftControls onPlayNext={onPlayNext} />
        <MiddleControls track={track!} />
        <RightControls />
      </div>
    </div>
  );
}
