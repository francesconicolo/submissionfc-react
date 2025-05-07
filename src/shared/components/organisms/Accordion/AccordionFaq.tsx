import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@shadcn/components/ui/accordion';
import i18n from 'src/config/i18n';

export function AccordionFaq({ sectionKey }: { sectionKey: string }) {
  const questions = i18n.t('faq.' + sectionKey + '.questions', {
    returnObjects: true
  }) as Array<{ question: string; answer: string }>;

  return (
    <Accordion type="single" collapsible className="w-full">
      {questions.map((item) => (
        <AccordionItem key={item.question} value={item.question}>
          <AccordionTrigger className="font-semibold cursor-pointer">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
