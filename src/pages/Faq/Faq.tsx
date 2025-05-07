import { TypographyH1, TypographyH4 } from '@shadcn/components/Typography';
import { Separator } from '@shadcn/components/ui/separator';
import { useTranslation } from 'react-i18next';

import { AccordionFaq } from 'src/shared/components/organisms/Accordion/AccordionFaq';

export default function Faq() {
  const { t } = useTranslation();
  const keys = Object.keys(t('faq', { returnObjects: true }));

  return (
    <div className="container mx-auto flex flex-col px-2 md:px-0">
      <TypographyH1 className="mt-32 mb-4">
        Frequently asked questions.
      </TypographyH1>
      {keys.map((key) => (
        <>
          <Separator className="my-4"></Separator>
          <div className="grid grid-cols-1 mb-6 md:grid-cols-2">
            <TypographyH4 key={key}>{t(`faq.${key}.title`)}</TypographyH4>
            <AccordionFaq sectionKey={key}></AccordionFaq>
          </div>
        </>
      ))}
    </div>
  );
}
