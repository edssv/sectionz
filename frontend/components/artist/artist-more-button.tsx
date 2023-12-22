import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import type { ArtistFragment } from '@/gql/types';

import { Icons } from '../icons';
import { Button } from '../ui/button';

interface ArtistMoreButtonProps {
  data: {
    artist: Pick<ArtistFragment['attributes'], 'name'>;
  };
}

export default function ArtistMoreButton({ data }: ArtistMoreButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button size='icon' title={`Открыть контекстное меню: ${data.artist.name}`} variant='link'>
          <Icons.moreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' side='bottom'>
        <DropdownMenuItem>
          <Icons.follow className='mr-2 h-4 w-4' />
          Подписаться
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icons.radio className='mr-2 h-4 w-4' />
          Радио по исполнителю
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icons.share className='mr-2 h-4 w-4' />
          Поделиться
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
