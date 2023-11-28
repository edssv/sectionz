/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { usePlayer } from '@/hooks/usePlayer';
import { convertSecToMinutes } from '@/lib/utils';

import { Icons } from '../icons';
import { TypographyMuted } from '../ui/typography-muted';

interface LeftControlsProps {
  onPlayNext: () => void;
}

export function LeftControls({ onPlayNext }: LeftControlsProps) {
  const player = usePlayer();

  const leftValue = convertSecToMinutes(player.currentTime);
  const rightValue = convertSecToMinutes(player.duration);
  const Icon = player.isPlaying ? Icons.playerPause : Icons.playerPlay;

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

  const handlePlay = () => {
    player.setIsPlaying(!player.isPlaying);
  };
  console.log(player.duration);
  return (
    <div className='-ml-2 flex h-full items-center justify-center gap-3'>
      <div
        className='flex h-10 w-10 cursor-pointer select-none items-center justify-center opacity-80 hover:opacity-100'
        title='Перемотка назад'
        onClick={onPlayPrevious}
      >
        <Icons.trackPrevious className='h-4 w-4' />
      </div>
      <div
        className='flex h-14 w-14 cursor-pointer select-none items-center justify-center opacity-80 hover:opacity-100'
        title={player.isPlaying ? 'Пауза' : 'Играть'}
        onClick={handlePlay}
      >
        <Icon className='h-6 w-6' />
      </div>
      <div
        className='flex h-10 w-10 cursor-pointer select-none items-center justify-center opacity-80 hover:opacity-100'
        title='Вперед'
        onClick={onPlayNext}
      >
        <Icons.trackNext className='h-4 w-4' />
      </div>
      <TypographyMuted className='text-xs'>
        {leftValue} / {rightValue}
      </TypographyMuted>
    </div>
  );
}
