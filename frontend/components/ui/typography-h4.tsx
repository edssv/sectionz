import { cn } from '@/lib/utils';

import type { TypographyProps } from './typography-h1';

export function TypographyH4({ children, className, ...otherProps }: TypographyProps) {
  return (
    <h4 className={cn('scroll-m-20 text-lg font-semibold tracking-tight', className)} {...otherProps}>
      {children}
    </h4>
  );
}
