import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@shadcn/components/ui/accordion';
import { Separator } from '@shadcn/components/ui/separator';
import { FC, ComponentProps } from 'react';

export const AccordionSectionRegulation: FC<ComponentProps<'div'>> = ({
  children,
  title
}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border p-4 rounded-2xl bg-card my-3 "
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bebas text-3xl tracking-wide font-medium cursor-pointer">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <Separator className="mb-5"></Separator>
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
