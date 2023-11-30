import { Button } from '@/components/ui/button';

import { Icons } from '../icons';

export function PlaylistEmptyPlaceholder() {
  return (
    <div className='flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed'>
      <div className='mx-auto flex max-w-[420px] flex-col items-center justify-center text-center'>
        <Icons.playlists className='h-10 w-10 text-muted-foreground' />
        <h3 className='mt-4 text-lg font-semibold'>Нет добавленных плейлистов</h3>
        <p className='mb-4 mt-2 text-sm text-muted-foreground'>
          Вы не добавили ни одного плейлиста. Попробуйте найти что-нибудь для себя.
        </p>
        <Button size='sm'>Искать плейлисты</Button>
      </div>
    </div>
  );
}
