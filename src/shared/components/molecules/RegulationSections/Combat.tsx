import { AccordionSectionRegulation } from '../../atoms/AccordionSectionRegulation';
import { useTranslation } from 'react-i18next';
import { TypographyPRegulation } from '@shadcn/components/Typography/TypographyPRegulation';
import i18n from 'src/config/i18n';

export default function Combat() {
  const basePathCombat = 'regulation.chapters.combat.';
  const paragraphsCombat = i18n.t(basePathCombat + 'paragraphs', {
    returnObjects: true
  }) as Array<string>;
  const { t } = useTranslation();
  return (
    <AccordionSectionRegulation title={t(basePathCombat + 'title')}>
      {paragraphsCombat.map((paragraph: string, index: number) => (
        <TypographyPRegulation key={index}>{paragraph}</TypographyPRegulation>
      ))}
      <TypographyPRegulation>
        <span className="font-bold">Note: </span> {t(basePathCombat + 'note')}
      </TypographyPRegulation>
    </AccordionSectionRegulation>
  );
}
