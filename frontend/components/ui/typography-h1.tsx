import { cn } from '@/lib/utils';

export interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function TypographyH1({ children, className, ...otherProps }: TypographyProps) {
  return (
    <h1 className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)} {...otherProps}>
      {children}
    </h1>
  );
}
