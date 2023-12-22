import { Skeleton } from '../ui/skeleton';

export function TrackInfoSkeleton() {
  return (
    <div className='flex items-center'>
      <Skeleton className='h-10 w-10' />
      <div className='ml-4 mr-2 space-y-1 text-sm'>
        <Skeleton className='h-3.5 w-24' />
        <div className='flex items-center gap-1 text-muted-foreground'>
          <Skeleton className='h-3.5 w-16' />
          <Skeleton className='h-3.5 w-20' />
          <Skeleton className='h-3.5 w-8' />
        </div>
      </div>
    </div>
  );
}
