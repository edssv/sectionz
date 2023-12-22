import { usePathname, useRouter } from 'next/navigation';

import { getPublicUrl } from '@/lib/publicUrlBuilder';
import { cn } from '@/lib/utils';

import { Icons } from '../icons';
import { Button } from '../ui/button';

export default function QueueButton() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Button
      size='icon'
      variant='ghost'
      className={cn({
        'relative after:absolute after:bottom-1 after:left-1/2 after:block after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-primary':
          pathname === getPublicUrl.queue()
      })}
      onClick={() => (pathname === getPublicUrl.queue() ? router.back() : router.push(getPublicUrl.queue()))}
    >
      <Icons.queue
        className={cn('h-[1.2rem] w-[1.2rem] text-muted-foreground', {
          'text-primary': pathname === getPublicUrl.queue()
        })}
      />
    </Button>
  );
}
