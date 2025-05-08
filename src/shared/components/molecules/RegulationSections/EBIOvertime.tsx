import { AccordionSectionRegulation } from '../../atoms/AccordionSectionRegulation';
import { useTranslation } from 'react-i18next';
import { TypographyPRegulation } from '@shadcn/components/Typography/TypographyPRegulation';
import i18n from 'src/config/i18n';

export default function EBIOvertime() {
  const basePathEBI = 'regulation.chapters.EBI-overtime.';
  const paragraphsEBI = i18n.t(basePathEBI + 'paragraphs', {
    returnObjects: true
  }) as Array<string>;
  const { t } = useTranslation();

  return (
    <AccordionSectionRegulation title={t(basePathEBI + 'title')}>
      {paragraphsEBI.map((paragraph: string, index: number) => (
        <TypographyPRegulation key={index}>{paragraph}</TypographyPRegulation>
      ))}
    </AccordionSectionRegulation>
  );
}
