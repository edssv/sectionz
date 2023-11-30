import { Button } from '@/components/ui/button';

import { Icons } from '../icons';

export function ArtistEmptyPlaceholder() {
  return (
    <div className='flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed'>
      <div className='mx-auto flex max-w-[420px] flex-col items-center justify-center text-center'>
        <Icons.mic className='h-10 w-10 text-muted-foreground' />
        <h3 className='mt-4 text-lg font-semibold'>Нет добавленных артистов</h3>
        <p className='mb-4 mt-2 text-sm text-muted-foreground'>
          Вы не добавили ни одного артиста. Попробуйте найти что-нибудь для себя.
        </p>
        <Button size='sm'>Искать артистов</Button>
      </div>
    </div>
  );
}
