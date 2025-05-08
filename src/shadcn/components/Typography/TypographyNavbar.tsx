import { cn } from '@shadcn/lib/utils';
import { FC, ComponentProps } from 'react';

export const TypographyNavbar: FC<ComponentProps<'div'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'text-lg font-bebas tracking-widest hover:text-primary transition-colors duration-400 cursor-pointer ',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
