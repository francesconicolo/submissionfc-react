import {
  TypographyH1,
  TypographyH2,
  TypographyP
} from '@shadcn/components/Typography';
import { Separator } from '@shadcn/components/ui/separator';
import { useIsMobile } from '@shadcn/hooks/use-mobile';
import { ChevronDown } from 'lucide-react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import CardNextEvent from 'src/shared/components/molecules/CardNextEvent/CardNextEvent';
import { CarouselEvents } from 'src/shared/components/organisms/CarouselEvents/CarouselEvents';

export const HomePage: FC = () => {
  const { t } = useTranslation();

  const isMobile = useIsMobile(480);

  return (
    <div className="bg-background px-2 sm:px-0">
      <div className="overlay h-full top-0 left-0">
        {isMobile ? (
          <video
            autoPlay
            loop
            muted
            src="./videos/Mobile480.mp4"
            className="object-cover w-full h-screen"
          ></video>
        ) : (
          <video
            autoPlay
            loop
            muted
            src="./videos/Desktop720.mp4"
            className="object-cover w-full h-screen "
          ></video>
        )}
        <ChevronDown className="absolute left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce text-primary size-10 z-30" />
      </div>
      <Separator></Separator>

      <TypographyH1 className="text-center font-frank-ruhl tracking-wide py-20 text-white lg:text-7xl parallax">
        <span className="text-primary">S</span>
        <span className="text-3xl lg:text-5xl">UBMISSION</span>
        <span className="text-primary"> F</span>
        <span className="text-3xl lg:text-5xl">IGHTING</span>
        <span className="text-primary"> C</span>
        <span className="text-3xl lg:text-5xl ">HAMPIONSHIP</span>
      </TypographyH1>

      <Separator></Separator>
      <div className=" bg-background container mx-auto mt-10 ">
        <TypographyH2 className="font-frank-ruhl">
          {t('next-event')}
        </TypographyH2>
        <CardNextEvent></CardNextEvent>
        <TypographyH2 className="font-frank-ruhl mt-10">
          {t('previous-events')}
        </TypographyH2>
        <div className="mx-14">
          <CarouselEvents></CarouselEvents>
        </div>
      </div>
      <Separator></Separator>

      <div className="container mx-auto my-10">
        <div className="flex flex-wrap">
          <div className="basis-full md:basis-1/2">
            <TypographyH1 className="font-frank-ruhl uppercase">
              {t('about-us.title')}
            </TypographyH1>
            <div className="flex flex-col gap-10 pt-16">
              <div>
                <TypographyH2 className="font-frank-ruhl">
                  {t('about-us.foundation.title')}
                </TypographyH2>
                <TypographyP>{t('about-us.foundation.text')}</TypographyP>
              </div>
              <div>
                <TypographyH2 className="font-frank-ruhl">
                  {t('about-us.objectives.title')}
                </TypographyH2>
                <TypographyP>{t('about-us.objectives.text')}</TypographyP>
              </div>
              <div>
                <TypographyH2 className="font-frank-ruhl">
                  {t('about-us.mission.title')}
                </TypographyH2>
                <TypographyP>{t('about-us.mission.text')}</TypographyP>
              </div>
            </div>
          </div>
          <div className="basis-full flex flex-wrap justify-center items-center gap-6 md:basis-1/2 md:flex-col md:px-10">
            <img
              src="./icons/logoASD.png"
              className=" h-[200px] lg:h-[400px] self-start object-contain"
              alt=""
            />
            <img
              src="./icons/logoFull.svg"
              className=" h-[200px] lg:h-[400px] self-end object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
