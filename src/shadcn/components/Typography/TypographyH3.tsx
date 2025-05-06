import { cn } from '@shadcn/lib/utils';
import { FC, ComponentProps } from 'react';

export const TypographyH3: FC<ComponentProps<'h3'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight first-letter:uppercase ',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};
