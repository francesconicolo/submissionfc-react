import { AccordionSectionRegulation } from '../../atoms/AccordionSectionRegulation';
import { useTranslation } from 'react-i18next';
import { TypographyPRegulation } from '@shadcn/components/Typography/TypographyPRegulation';
import i18n from 'src/config/i18n';
import { Dot } from 'lucide-react';

export default function Disqualification() {
  const basePathDisqualification = 'regulation.chapters.disqualification.';
  const paragraphsDisqualification = i18n.t(basePathDisqualification + 'list', {
    returnObjects: true
  }) as Array<string>;
  const { t } = useTranslation();
  return (
    <AccordionSectionRegulation title={t(basePathDisqualification + 'title')}>
      {paragraphsDisqualification.map((paragraph: string, index: number) => (
        <TypographyPRegulation key={index} className="flex items-center">
          <Dot className=" shrink-0" />
          {paragraph}
        </TypographyPRegulation>
      ))}
    </AccordionSectionRegulation>
  );
}
