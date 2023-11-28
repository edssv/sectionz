import { cn } from '@/lib/utils';

import type { TypographyProps } from './typography-h1';

export function TypographyH3({ children, className, ...otherProps }: TypographyProps) {
  return (
    <h3 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)} {...otherProps}>
      {children}
    </h3>
  );
}
