/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { usePlayer } from '@/hooks/use-player';
import { cn } from '@/lib/utils';

import { Icons } from '../icons';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';

export function RightControls() {
  const player = usePlayer();

  const VolumeIcon = player.isMuted ? Icons.speakerOff : Icons.speakerLoud;

  const onChangeVolume = (volume: number) => {
    player.setVolume(volume);
    if (volume === 0) player.setIsMuted(true);
    if (player.isMuted && volume > 0) player.setIsMuted(false);
  };

  const toggleMute = () => {
    if (player.isMuted) {
      player.setIsMuted(false);
    } else {
      player.setIsMuted(true);
    }
  };

  const handleHover = () => {
    player.setIsShownVolumeController(true);
  };

  return (
    <div className='flex items-center justify-end gap-4'>
      <Slider
        className={cn('h-1 w-20 transition-all', player.isShownVolumeController ? 'opacity-100' : 'opacity-0')}
        defaultValue={[player.volume]}
        max={100}
        step={1}
        value={[player.isMuted ? 0 : player.volume]}
        onValueChange={(values) => onChangeVolume(values[0])}
      />
      <Button
        className='cursor-pointer'
        size='icon'
        title={player.isMuted ? 'Включить звук' : 'Отключить звук'}
        variant='ghost'
        onClick={toggleMute}
        onMouseEnter={handleHover}
      >
        <VolumeIcon className='h-[1.2rem] w-[1.2rem] text-muted-foreground' />
      </Button>
    </div>
  );
}
