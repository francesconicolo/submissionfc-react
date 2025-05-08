import { AccordionSectionRegulation } from '../../atoms/AccordionSectionRegulation';
import { useTranslation } from 'react-i18next';
import { TypographyPRegulation } from '@shadcn/components/Typography/TypographyPRegulation';
import i18n from 'src/config/i18n';

import { TypographySectionTitle } from '@shadcn/components/Typography/TypographySectionTitle';
import { TypographyLarge } from '@shadcn/components/Typography';

export default function MatchRules() {
  const basePathCombat = 'regulation.chapters.match-rules.';
  const paragraphsMatchRules = i18n.t(basePathCombat + 'paragraphs', {
    returnObjects: true
  }) as Array<string>;
  const faq = i18n.t(basePathCombat + 'explanations.explanations-faq', {
    returnObjects: true
  }) as Array<{ question: string; answer: string }>;
  const { t } = useTranslation();
  return (
    <AccordionSectionRegulation title={t(basePathCombat + 'title')}>
      {paragraphsMatchRules.map((paragraph: string, index: number) => (
        <TypographyPRegulation key={index}>{paragraph}</TypographyPRegulation>
      ))}
      <TypographySectionTitle>
        {t(basePathCombat + 'explanations.title')}
      </TypographySectionTitle>
      {faq.map((item, index) => (
        <TypographyPRegulation
          key={`${item.question}-${index}`}
          className="py-5"
        >
          <TypographyLarge>{item.question}</TypographyLarge>
          {item.answer}
        </TypographyPRegulation>
      ))}
    </AccordionSectionRegulation>
  );
}
