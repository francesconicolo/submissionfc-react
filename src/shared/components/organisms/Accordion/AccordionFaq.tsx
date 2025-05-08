import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@shadcn/components/ui/accordion';

export function AccordionFaq({
  faq
}: {
  faq: Array<{ question: string; answer: string }>;
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faq.map((item, index) => (
        <AccordionItem key={`${item.question}-${index}`} value={item.question}>
          <AccordionTrigger className="font-semibold cursor-pointer text-base ">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
