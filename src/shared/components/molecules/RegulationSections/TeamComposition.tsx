/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import { AccordionSectionRegulation } from '../../atoms/AccordionSectionRegulation';
import { TypographyPRegulation } from '@shadcn/components/Typography/TypographyPRegulation';
import { TypographySectionTitle } from '@shadcn/components/Typography/TypographySectionTitle';

import i18n from 'src/config/i18n';

import SquadVisualBelt from '../../atoms/SquadVisualBelt';
import SquadVisualWeight from '../../atoms/SquadVisualWeight';

export default function TeamComposition() {
  const basePathGrades = 'regulation.chapters.team-composition.grades.';
  const basePathWeight = 'regulation.chapters.team-composition.weights.';
  const basePath = 'regulation.chapters.team-composition.';

  const categoriesMaleFemale = i18n.t(basePathGrades + 'genders', {
    returnObjects: true
  }) as Array<any>;
  const weightsMaleFamale = i18n.t(basePathWeight + 'genders', {
    returnObjects: true
  }) as Array<any>;
  const paragraphsSquad6 = i18n.t(basePath + 'squad-6.paragraphs', {
    returnObjects: true
  }) as Array<any>;
  const paragraphsAgeGender = i18n.t(basePath + 'age-gender.paragraphs', {
    returnObjects: true
  }) as Array<any>;
  const paragraphsIdentification = i18n.t(
    basePath + 'squad-identification.paragraphs',
    {
      returnObjects: true
    }
  ) as Array<any>;
  const { t } = useTranslation();
  return (
    <AccordionSectionRegulation
      title={t('regulation.chapters.team-composition.title')}
    >
      {/* COMPOSIZIONE BASE */}
      <TypographySectionTitle>
        {t(basePathGrades + 'title')}
      </TypographySectionTitle>
      <TypographyPRegulation className="pl-2">
        {t(basePathGrades + 'overview')}
      </TypographyPRegulation>
      {/* CATEGORIE - CINTURE*/}
      {categoriesMaleFemale.map((category) => (
        <div key={Math.random()}>
          <TypographySectionTitle className="mt-10">
            {category.title}
          </TypographySectionTitle>
          <TypographyPRegulation className="pl-2">
            {category.overview}
          </TypographyPRegulation>
          {category.categories.map((category: any) => (
            <div className="ml-2 pl-2 border-l-2" key={Math.random()}>
              <TypographySectionTitle className="mt-4 text-xl">
                {category.title}
              </TypographySectionTitle>
              <TypographyPRegulation className="pl-2">
                {category.description}
              </TypographyPRegulation>
              <div className="flex flex-wrap justify-center items-center gap-4">
                {category.squads.map(
                  (squad: {
                    squadComp: string[];
                    operator: string;
                    yearsOfExperience: string;
                    title: string;
                  }) => (
                    <div key={Math.random()}>
                      <SquadVisualBelt
                        squad={squad.squadComp}
                        operator={squad.operator}
                        yearsOfExperience={squad.yearsOfExperience}
                        title={squad.title}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
      <TypographyPRegulation>
        <span className="font-bold">Note: </span>
        {t('regulation.chapters.team-composition.note')}
      </TypographyPRegulation>
      {/* SEZIONE PESO */}
      <TypographySectionTitle className="mt-10">
        {t(basePathWeight + 'title')}
      </TypographySectionTitle>
      {weightsMaleFamale.map((gender: any) => (
        <div key={Math.random()} className="ml-2 pl-2 border-l-2">
          <TypographySectionTitle className="mt-10 text-xl">
            {gender.title}
          </TypographySectionTitle>
          <TypographyPRegulation className="pl-2">
            {gender.description}
          </TypographyPRegulation>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {gender.squads.map((weightExample: any) => (
              <SquadVisualWeight
                nameExample={weightExample.nameExample}
                operator={weightExample.operator}
                squad={weightExample.squadComp}
                key={Math.random()}
              />
            ))}
          </div>
          <TypographyPRegulation>
            <span className="font-bold">Note: </span>
            {gender.note}
          </TypographyPRegulation>
        </div>
      ))}
      {/* SEZIONE SQUADRA 6 */}
      <TypographySectionTitle className="mt-10">
        {t(basePath + 'squad-6.title')}
      </TypographySectionTitle>
      {paragraphsSquad6.map((paragraph: string) => (
        <TypographyPRegulation className="pl-2" key={Math.random()}>
          {paragraph}
        </TypographyPRegulation>
      ))}
      {/* SEZIONE SESSO E ETA */}
      <TypographySectionTitle className="mt-10">
        {t(basePath + 'age-gender.title')}
      </TypographySectionTitle>
      {paragraphsAgeGender.map((paragraph: string) => (
        <TypographyPRegulation className="pl-2" key={Math.random()}>
          {paragraph}
        </TypographyPRegulation>
      ))}
      {/* SEZIONE SESSO E ETA */}
      <TypographySectionTitle className="mt-10">
        {t(basePath + 'squad-identification.title')}
      </TypographySectionTitle>
      {paragraphsIdentification.map((paragraph: string) => (
        <TypographyPRegulation className="pl-2" key={Math.random()}>
          {paragraph}
        </TypographyPRegulation>
      ))}
    </AccordionSectionRegulation>
  );
}
