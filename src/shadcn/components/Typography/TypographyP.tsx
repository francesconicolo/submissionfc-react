import { cn } from '@shadcn/lib/utils';
import { ComponentProps, FC } from 'react';

export const TypographyP: FC<ComponentProps<'p'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        'leading-7 font-lato text-[1rem] [&:not(:first-child)]:mt-6',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
