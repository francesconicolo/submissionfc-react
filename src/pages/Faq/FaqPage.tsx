import {
  TypographyH1,
  TypographyH4,
  TypographyMuted
} from '@shadcn/components/Typography';
import { Separator } from '@shadcn/components/ui/separator';
import { useTranslation } from 'react-i18next';

import { AccordionFaq } from 'src/shared/components/organisms/Accordion/AccordionFaq';

export default function FaqPage() {
  const { t } = useTranslation();

  const sections = t('faq.sections', { returnObjects: true }) as Array<{
    title: string;
    questions: Array<{ question: string; answer: string }>;
  }>;
  return (
    <div className="container mx-auto px-2 mb-64 md:px-0">
      <TypographyH1 className="mt-56 mb-4">
        <span className="text-primary text-7xl">F</span>requently{' '}
        <span className="text-primary text-7xl">a</span>sked{' '}
        <span className="text-primary text-7xl">q</span>uestions.
      </TypographyH1>
      <TypographyMuted>{t('faq.description')}</TypographyMuted>
      {sections.map((section) => (
        <>
          <Separator className="my-4"></Separator>
          <div className="grid grid-cols-1 mb-6 md:grid-cols-2">
            <TypographyH4 key={section.title}>{section.title}</TypographyH4>
            <AccordionFaq faq={section.questions}></AccordionFaq>
          </div>
        </>
      ))}
    </div>
  );
}
