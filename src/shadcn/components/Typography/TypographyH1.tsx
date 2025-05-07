import { cn } from '@shadcn/lib/utils';
import { FC, ComponentProps } from 'react';

export const TypographyH1: FC<ComponentProps<'h1'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-5xl font-extrabold font-bebas tracking-tight lg:text-6xl ',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
