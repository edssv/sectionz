import { Button } from '@/components/ui/button';

import { Icons } from '../icons';

export function QueueEmptyPlaceholder() {
  return (
    <div className='flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed'>
      <div className='mx-auto flex max-w-[420px] flex-col items-center justify-center text-center'>
        <Icons.queue className='h-10 w-10 text-muted-foreground' />
        <h3 className='mt-4 text-lg font-semibold'>Очередь пуста</h3>
        <p className='mb-4 mt-2 text-sm text-muted-foreground'>Выберите треки или альбомы для прослушивания.</p>
        <Button size='sm'>Искать альбомы</Button>
      </div>
    </div>
  );
}
