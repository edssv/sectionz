'use client';

import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Popover, PopoverContent, PopoverTrigger } from './popover';

const ActionPopover = Popover;

const ActionPopoverTrigger = PopoverTrigger;

const ActionPopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, ...props }, ref) => (
  <PopoverContent ref={ref} className={cn('w-80 border-none bg-[#0d72ea] text-white', className)} {...props} />
));
ActionPopoverContent.displayName = PopoverPrimitive.Content.displayName;

const ActionPopoverTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('heading mb-2 text-lg font-bold', className)} {...props} />
  )
);
ActionPopoverTitle.displayName = 'ActionPopoverTitle';

const ActionPopoverDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn('text-sm', className)} {...props} />
);
ActionPopoverDescription.displayName = 'ActionPopoverDescription';

const ActionPopoverFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('mt-6 flex justify-end', className)} {...props} />
);
ActionPopoverFooter.displayName = 'ActionPopoverFooter';

export {
  ActionPopover,
  ActionPopoverTrigger,
  ActionPopoverContent,
  ActionPopoverTitle,
  ActionPopoverDescription,
  ActionPopoverFooter
};
