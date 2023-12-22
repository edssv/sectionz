/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { Repeat } from '@/lib/types/types';
import { cn } from '@/lib/utils';
import usePlayerStore, { usePlayerAPI } from '@/stores/use-player-store';

import { Icons } from '../icons';
import { Button } from '../ui/button';

import VolumeControl from './volume-control';

const titleMap = {
  [Repeat.ONE]: 'Отключить повтор',
  [Repeat.ALL]: 'Включить повтор одной',
  [Repeat.NONE]: 'Включить повтор всех',
  default: 'Включить повтор всех'
};

export function RightControls() {
  const { repeat, shuffle } = usePlayerStore();
  const playerAPI = usePlayerAPI();

  const RepeatIcon = repeat === Repeat.ONE ? Icons.repeatOne : Icons.repeat;

  return (
    <div className='flex items-center gap-1'>
      <VolumeControl />
      <Button
        size='icon'
        title={titleMap[repeat] || titleMap.default}
        variant='ghost'
        className={cn({
          'relative after:absolute after:bottom-1 after:left-1/2 after:block after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-primary':
            repeat !== Repeat.NONE
        })}
        onClick={() => playerAPI.toggleRepeat()}
      >
        <RepeatIcon className={cn('h-4 w-4', { 'text-muted-foreground': repeat === Repeat.NONE })} />
      </Button>
      <Button
        size='icon'
        title={shuffle ? 'Отключить случайный порядок' : 'Включить случайный порядок'}
        variant='ghost'
        className={cn({
          'relative after:absolute after:bottom-1 after:left-1/2 after:block after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-primary':
            shuffle
        })}
        onClick={() => playerAPI.toggleShuffle()}
      >
        <Icons.shuffle className={cn('h-4 w-4', { 'text-muted-foreground': !shuffle })} />
      </Button>
    </div>
  );
}
