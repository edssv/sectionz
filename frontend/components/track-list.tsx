import * as React from 'react';

import { cn } from '@/lib/utils';

const TrackList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className='relative w-full overflow-auto'>
      <div ref={ref} className={cn('w-full caption-bottom text-sm text-muted-foreground', className)} {...props} />
    </div>
  )
);
TrackList.displayName = 'TrackList';

const TrackListHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center [&_div-list-row]:border-b', className)} {...props} />
  )
);
TrackListHeader.displayName = 'TrackListHeader';

const TrackListBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('[&_div:last-child]:border-0', className)} {...props} />
  )
);
TrackListBody.displayName = 'TrackListBody';

const TrackListRow = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'track-list-row grid w-full items-center gap-4 border-b px-4 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted [&_div:last-child]:justify-end',
        className
      )}
      {...props}
    />
  )
);
TrackListRow.displayName = 'TrackListRow';

const TrackListHead = React.forwardRef<HTMLDivElement, React.ThHTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex h-10 items-center justify-center font-medium', className)} {...props} />
  )
);
TrackListHead.displayName = 'TrackListHead';

const TrackListCell = React.forwardRef<HTMLDivElement, React.TdHTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center justify-center py-2', className)} {...props} />
  )
);
TrackListCell.displayName = 'TrackListCell';

export { TrackList, TrackListHeader, TrackListBody, TrackListHead, TrackListRow, TrackListCell };
