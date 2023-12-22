import { Icons } from '../icons';
import { Button } from '../ui/button';
import { TypographyMuted } from '../ui/typography-muted';

export default function LeftControlsPlaceholder() {
  return (
    <div className='-ml-2 flex h-full items-center justify-center gap-3'>
      <Button disabled className='h-10 w-10' size='icon' variant='ghost'>
        <Icons.trackPrevious className='h-4 w-4 text-muted-foreground' />
      </Button>
      <Button disabled className='h-8 w-8 rounded-full bg-foreground text-background' size='icon' variant='none'>
        <Icons.play className='h-4 w-4' />
      </Button>
      <Button disabled className='h-10 w-10' size='icon' title='Вперед' variant='ghost'>
        <Icons.trackNext className='h-4 w-4 text-muted-foreground' />
      </Button>
      <TypographyMuted className='text-xs'>-:-- / -:--</TypographyMuted>
    </div>
  );
}
