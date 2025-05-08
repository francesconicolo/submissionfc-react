import { AccordionSectionRegulation } from '../../atoms/AccordionSectionRegulation';
import { useTranslation } from 'react-i18next';
import { TypographyPRegulation } from '@shadcn/components/Typography/TypographyPRegulation';
import i18n from 'src/config/i18n';

export default function WeightIn() {
  const basePathWeightIn = 'regulation.chapters.weight-in.';
  const paragraphsWeightIn = i18n.t(basePathWeightIn + 'paragraphs', {
    returnObjects: true
  }) as Array<string>;
  const { t } = useTranslation();
  return (
    <AccordionSectionRegulation title={t(basePathWeightIn + 'title')}>
      {paragraphsWeightIn.map((paragraph: string, index: number) => (
        <TypographyPRegulation key={index}>{paragraph}</TypographyPRegulation>
      ))}
    </AccordionSectionRegulation>
  );
}
