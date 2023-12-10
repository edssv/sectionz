/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { Repeat } from '@/lib/types/types';
import { cn } from '@/lib/utils';
import usePlayerStore, { usePlayerAPI } from '@/stores/use-player-store';

import { Icons } from '../icons';
import { Button } from '../ui/button';

import VolumeControl from './volume-control';

interface RightControlsProps {
  showVolume: boolean;
  setShowVolume: React.Dispatch<React.SetStateAction<boolean>>;
}

const titleMap = {
  [Repeat.ONE]: 'Отключить повтор',
  [Repeat.ALL]: 'Включить повтор одной',
  [Repeat.NONE]: 'Включить повтор всех',
  default: 'Включить повтор всех'
};

export function RightControls({ setShowVolume, showVolume }: RightControlsProps) {
  const { repeat, shuffle } = usePlayerStore();
  const playerAPI = usePlayerAPI();

  const RepeatIcon = repeat === Repeat.ONE ? Icons.repeatOne : Icons.repeat;

  return (
    <div className='flex items-center gap-1.5'>
      <VolumeControl setShowVolume={setShowVolume} showVolume={showVolume} />
      <Button
        size='icon'
        title={titleMap[repeat] || titleMap.default}
        variant='ghost'
        onClick={() => playerAPI.toggleRepeat()}
      >
        <RepeatIcon className={cn('h-[1.1rem] w-[1.1rem]', { 'text-muted-foreground': repeat === Repeat.NONE })} />
      </Button>
      <Button size='icon' title='Включить случайный порядок' variant='ghost' onClick={() => playerAPI.toggleShuffle()}>
        <Icons.shuffle className={cn('h-[1.1rem] w-[1.1rem]', { 'text-muted-foreground': !shuffle })} />
      </Button>
    </div>
  );
}
