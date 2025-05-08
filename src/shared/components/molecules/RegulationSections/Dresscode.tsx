import { AccordionSectionRegulation } from '../../atoms/AccordionSectionRegulation';
import { useTranslation } from 'react-i18next';
import { TypographyPRegulation } from '@shadcn/components/Typography/TypographyPRegulation';
import i18n from 'src/config/i18n';
import DressVisual from '../../atoms/DressVisual';

export default function Dresscode() {
  const basePathDresscode = 'regulation.chapters.dress-code.';
  const paragraphsDresscode = i18n.t(basePathDresscode + 'paragraphs', {
    returnObjects: true
  }) as Array<string>;
  const { t } = useTranslation();
  const examplesDresscode = i18n.t(
    basePathDresscode + 'explanations.examples',
    { returnObjects: true }
  ) as Array<{ color: string; dress: string; yearsOfExperience: string }>;
  return (
    <AccordionSectionRegulation title={t(basePathDresscode + 'title')}>
      {paragraphsDresscode.map((paragraph: string, index: number) => {
        return (
          <TypographyPRegulation key={index}>{paragraph}</TypographyPRegulation>
        );
      })}
      <TypographyPRegulation>
        <span className="font-bold">Note: </span>{' '}
        {t(basePathDresscode + 'note')}
      </TypographyPRegulation>
      <TypographyPRegulation className="font-bold text-lg">
        {t(basePathDresscode + 'explanations.question')}
      </TypographyPRegulation>
      <div className="flex flex-wrap gap-8 justify-center my-6">
        {examplesDresscode.map((example, index) => (
          <DressVisual
            key={index}
            color={example.color}
            dressDescription={example.dress}
            yearsOfExperience={example.yearsOfExperience}
          />
        ))}
      </div>
    </AccordionSectionRegulation>
  );
}
