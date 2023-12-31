'use client';

import { useCallback, useState } from 'react';

import player from '@/lib/player';
import { cn } from '@/lib/utils';
import { usePlayerAPI } from '@/stores/use-player-store';

import { Icons } from '../icons';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';

const SMOOTHING_FACTOR = 2.5;

const smoothifyVolume = (value: number): number => value ** SMOOTHING_FACTOR;
const unsmoothifyVolume = (value: number): number => value ** (1 / SMOOTHING_FACTOR);

export default function VolumeControl() {
  const audio = player.getAudio();

  const [volume, setVolume] = useState(audio?.volume);
  const [muted, setMuted] = useState(audio?.muted);
  const playerAPI = usePlayerAPI();

  const VolumeIcon = muted || volume === 0 ? Icons.speakerOff : Icons.speakerLoud;

  const setPlayerVolume = useCallback(
    (values: number[]) => {
      const [value] = values;
      const smoothVolume = smoothifyVolume(value);

      playerAPI.setVolume(smoothVolume);
      setVolume(smoothVolume);
    },
    [setVolume, playerAPI]
  );

  const mute = useCallback(() => {
    const muted = !player.isMuted();

    playerAPI.setMuted(muted);
    setMuted(muted);
  }, [playerAPI]);

  const onMouseEnter = () => {
    const volumeSlider = document.getElementById('volume-slider');

    if (volumeSlider) {
      volumeSlider.style.opacity = '1';
    }
  };

  return (
    <div className='flex items-center justify-end gap-4'>
      <Slider
        className={cn('h-1 w-20 opacity-0 transition-all')}
        defaultValue={[volume]}
        id='volume-slider'
        max={1}
        step={0.01}
        title='Громкость'
        value={[muted ? 0 : unsmoothifyVolume(volume)]}
        onValueChange={setPlayerVolume}
      />

      <Button
        size='icon'
        title={muted ? 'Включить звук' : 'Отключить звук'}
        variant='ghost'
        onClick={mute}
        onMouseEnter={onMouseEnter}
      >
        <VolumeIcon className='h-[1.1rem] w-[1.1rem] text-muted-foreground' />
      </Button>
    </div>
  );
}
