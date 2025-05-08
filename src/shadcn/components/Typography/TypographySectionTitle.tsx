import { cn } from '@shadcn/lib/utils';
import { FC, ComponentProps } from 'react';

export const TypographySectionTitle: FC<ComponentProps<'h3'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-bebas font-medium tracking-wide mt-9 first-letter:uppercase ',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};
