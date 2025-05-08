import { AccordionSectionRegulation } from '../../atoms/AccordionSectionRegulation';
import { useTranslation } from 'react-i18next';
import { TypographyPRegulation } from '@shadcn/components/Typography/TypographyPRegulation';
import i18n from 'src/config/i18n';
import { TypographySectionTitle } from '@shadcn/components/Typography/TypographySectionTitle';
import { Dot } from 'lucide-react';

export default function IllegalMoves() {
  const basePathIllegalMoves = 'regulation.chapters.illegal-moves.';
  const listBeginner = i18n.t(basePathIllegalMoves + 'beginner.list', {
    returnObjects: true
  }) as Array<string>;
  const listAdvanced = i18n.t(basePathIllegalMoves + 'advanced.list', {
    returnObjects: true
  }) as Array<string>;
  const { t } = useTranslation();
  return (
    <AccordionSectionRegulation title={t(basePathIllegalMoves + 'title')}>
      <TypographySectionTitle>
        {t(basePathIllegalMoves + 'beginner.title')}
      </TypographySectionTitle>
      {listBeginner.map((paragraph: string, index: number) => (
        <TypographyPRegulation key={index} className="flex items-center">
          <Dot className="shrink-0" />
          {paragraph}
        </TypographyPRegulation>
      ))}
      <TypographySectionTitle>
        {t(basePathIllegalMoves + 'advanced.title')}
      </TypographySectionTitle>
      {listAdvanced.map((paragraph: string, index: number) => (
        <TypographyPRegulation key={index} className="flex items-center">
          <Dot />
          {paragraph}
        </TypographyPRegulation>
      ))}
    </AccordionSectionRegulation>
  );
}
