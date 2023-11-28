import { cn } from '@/lib/utils';

import type { TypographyProps } from './typography-h1';

export function TypographyH2({ children, className, ...otherProps }: TypographyProps) {
  return (
    <h2
      className={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}
      {...otherProps}
    >
      {children}
    </h2>
  );
}
