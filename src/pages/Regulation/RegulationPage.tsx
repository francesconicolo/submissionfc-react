import {
  TypographyBlockquote,
  TypographyH1
} from '@shadcn/components/Typography';

import { useTranslation } from 'react-i18next';
import DownloadSection from 'src/shared/components/molecules/DownloadSection/DownloadSection';
import Combat from 'src/shared/components/molecules/RegulationSections/Combat';
import Disqualification from 'src/shared/components/molecules/RegulationSections/Disqualification';
import Dresscode from 'src/shared/components/molecules/RegulationSections/Dresscode';
import EBIOvertime from 'src/shared/components/molecules/RegulationSections/EBIOvertime';
import IllegalMoves from 'src/shared/components/molecules/RegulationSections/IllegalMoves';
import MatchRules from 'src/shared/components/molecules/RegulationSections/MatchRules';
import Penalties from 'src/shared/components/molecules/RegulationSections/Penalties';
import TeamComposition from 'src/shared/components/molecules/RegulationSections/TeamComposition';
import WeightIn from 'src/shared/components/molecules/RegulationSections/WeightIn';

export default function RegulationPage() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-2 mb-64 md:px-0 ">
      <TypographyH1 className="mt-56 mb-4 first-letter:text-7xl first-letter:text-primary ">
        {t('regulation.title')}
      </TypographyH1>
      <TypographyBlockquote className="not-italic">
        {t('regulation.overview.text')}
      </TypographyBlockquote>
      <div className="flex justify-center my-10">
        <DownloadSection></DownloadSection>
      </div>
      <div>
        <TeamComposition></TeamComposition>
        <Combat></Combat>
        <MatchRules></MatchRules>
        <IllegalMoves></IllegalMoves>
        <Disqualification></Disqualification>
        <Penalties></Penalties>
        <EBIOvertime></EBIOvertime>
        <Dresscode></Dresscode>
        <WeightIn></WeightIn>
      </div>
    </div>
  );
}
