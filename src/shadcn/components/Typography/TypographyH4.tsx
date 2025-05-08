import { cn } from '@shadcn/lib/utils';
import { FC, ComponentProps } from 'react';

export const TypographyH4: FC<ComponentProps<'h4'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight first-letter:uppercase',
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
};
