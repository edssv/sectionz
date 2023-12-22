import { Icons } from '../icons';
import { Button } from '../ui/button';

export function RightControlsPlaceholder() {
  return (
    <div className='flex items-center gap-1'>
      <Button disabled size='icon' variant='ghost'>
        <Icons.speakerLoud className='h-[1.1rem] w-[1.1rem] text-muted-foreground' />
      </Button>
      <Button disabled size='icon' variant='ghost'>
        <Icons.repeat className='h-4 w-4 text-muted-foreground' />
      </Button>
      <Button disabled size='icon' title='Включить случайный порядок' variant='ghost'>
        <Icons.shuffle className='h-4 w-4 text-muted-foreground' />
      </Button>
    </div>
  );
}
