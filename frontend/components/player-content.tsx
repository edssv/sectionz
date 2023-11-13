/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import useSound from 'use-sound';

import { usePlayer } from '@/hooks/usePlayer';
import type { Track } from '@/interfaces/strapi-track';
import { cn, convertMsToMinutes } from '@/lib/utils';

import { Icons } from './icons';
import { ProgressBar } from './progress-bar';
import { Slider } from './ui/slider';

interface PlayerContentProps {
  track: Track;
  trackUrl: string;
}

export function PlayerContent({ track, trackUrl }: PlayerContentProps) {
  const player = usePlayer();

  const Icon = player.isPlaying ? Icons.pause : Icons.play;
  const VolumeIcon = player.isMuted ? Icons.speakerOff : Icons.speakerLoud;

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

  const onPlayPrevious = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const previousSong = player.ids[currentIndex - 1];

    if (!previousSong) {
      return player.setId(player.ids[player.ids.length - 1]);
    }

    player.setId(previousSong);
  };

  const onChangeVolume = (volume: number) => {
    player.setVolume(volume);
    if (volume === 0) player.setIsMuted(true);
    if (player.isMuted && volume > 0) player.setIsMuted(false);
  };

  const [play, { duration, pause, sound }] = useSound(
    'http://127.0.0.1:1337/uploads/Mott_The_Hoople_Sweet_Jane_48220369_561fe84462.mp3',
    {
      volume: player.isMuted ? 0 : player.volume / 100,
      onplay: () => player.setIsPlaying(true),
      onend: () => {
        player.setIsPlaying(false);
        onPlayNext();
      },
      onpause: () => player.setIsPlaying(false),
      format: ['mp3']
    }
  );
  console.log(sound);
  useEffect(
    () => () => {
      sound?.unload();
    },
    [sound]
  );

  const handlePlay = () => {
    if (!player.isPlaying) {
      play();
    } else {
      pause();
    }
  };

  const toggleMute = () => {
    if (player.isMuted) {
      player.setIsMuted(false);
    } else {
      player.setIsMuted(true);
    }
  };

  return (
    <div className='group container h-full'>
      <ProgressBar leftValue='0:00' rightValue={duration ? convertMsToMinutes(duration) : ''} />
      <div className='flex min-h-[60px] items-center justify-between bg-popover'>
        <div className='flex items-center gap-12'>
          <div className='flex items-center gap-3'>
            <Image alt='cover' height={50} src='http://127.0.0.1:1337/uploads/scale_1200_bbf0a5f796.jpeg' width={50} />
            <div className='space-y-1 text-sm'>
              <h3 className='font-medium leading-none'>The Hoople</h3>
              <p className='text-xs text-muted-foreground'>Mott The Hoople</p>
            </div>
          </div>

          <div className='flex h-full gap-6'>
            <div
              className='flex h-[60px] w-10 cursor-pointer select-none items-center justify-center py-2.5'
              onClick={onPlayPrevious}
            >
              <Icons.trackPrevious className='h-[28px] w-[28px] opacity-50' />
            </div>
            <div
              className='flex h-[60px] w-10 cursor-pointer select-none items-center justify-center py-2.5'
              onClick={handlePlay}
            >
              <Icon className='h-[28px] w-[28px] opacity-50' />
            </div>
            <div
              className='flex h-[60px] w-10 cursor-pointer select-none items-center justify-center py-2.5'
              onClick={onPlayNext}
            >
              <Icons.trackNext className='h-[28px] w-[28px] opacity-50' />
            </div>
          </div>
        </div>
        <div className='flex gap-3'>
          <div onClick={toggleMute}>
            <VolumeIcon className='opacity-50' />
          </div>
          <Slider
            className={cn('w-24')}
            defaultValue={[player.volume]}
            max={100}
            step={1}
            value={[player.isMuted ? 0 : player.volume]}
            onValueChange={(values) => onChangeVolume(values[0])}
          />
        </div>
      </div>
    </div>
  );
}
