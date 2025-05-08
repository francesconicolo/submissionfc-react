import { AccordionSectionRegulation } from '../../atoms/AccordionSectionRegulation';
import { useTranslation } from 'react-i18next';
import { TypographyPRegulation } from '@shadcn/components/Typography/TypographyPRegulation';
import i18n from 'src/config/i18n';

export default function Penalties() {
  const basePathPenalties = 'regulation.chapters.penalties.';
  const paragraphsPenalties = i18n.t(basePathPenalties + 'paragraphs', {
    returnObjects: true
  }) as Array<string>;
  const { t } = useTranslation();

  return (
    <AccordionSectionRegulation title={t(basePathPenalties + 'title')}>
      {paragraphsPenalties.map((paragraph: string, index: number) => {
        return (
          <TypographyPRegulation key={index}>{paragraph}</TypographyPRegulation>
        );
      })}

      <TypographyPRegulation>
        <span className="font-bold">Note: </span>{' '}
        {t(basePathPenalties + 'note')}
      </TypographyPRegulation>
    </AccordionSectionRegulation>
  );
}
