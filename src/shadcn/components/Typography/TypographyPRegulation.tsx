import { cn } from '@shadcn/lib/utils';
import { ComponentProps, FC } from 'react';

export const TypographyPRegulation: FC<ComponentProps<'p'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        'leading-7 font-lato text-[1rem] pl-2 [&:not(:first-child)]:mt-2 first-letter:uppercase',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
