import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@shadcn/components/ui/card';
import { useGetAllEventsNextQuery } from 'src/api/event/event.queries';
import { AsyncQueryView } from '../../utils/AsyncQueryView/AsyncQueryView';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographySmall
} from '@shadcn/components/Typography';
import { useTranslation } from 'react-i18next';
import i18n from 'src/config/i18n';
import { Calendar, CalendarX2, LoaderCircle, Map } from 'lucide-react';

import Countdown from '../../organisms/Countdown/Countdown';
import { Button } from '@shadcn/components/ui/button';

export default function CardNextEvent() {
  const getAllNextEventsQuery = useGetAllEventsNextQuery();
  const { t } = useTranslation();
  const dateLongFormat = (date: Date): string => {
    return date.toLocaleDateString(i18n.language, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <AsyncQueryView
      query={getAllNextEventsQuery}
      data={(event) =>
        event ? (
          <>
            <TypographyH2 className="font-bebas">
              {t('next-event')}
            </TypographyH2>
            <Card className="mt-4 mb-16 relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-5xl md:text-6xl lg:text-7xl text-center font-bebas tracking-wide uppercase z-40 text-primary">
                  {event.name}
                </CardTitle>
              </CardHeader>
              <img
                src="/icons/logoFull.svg"
                alt="logo SubmissionFC"
                className="absolute z-0 opacity-5 w-[800px] h-[800px] select-none "
                style={{ objectFit: 'contain' }}
              ></img>
              <CardContent className="flex w-full flex-wrap justify-center ">
                <div className="basis-full md:basis-1/2 flex justify-center z-10">
                  <div className="flex flex-col gap-8 w-full justify-between">
                    <div className="flex flex-col gap-10">
                      <div className="flex flex-wrap gap-10">
                        <div>
                          <TypographySmall>
                            {t('card-next-event.date-event')}
                          </TypographySmall>
                          <div className="flex items-center gap-4">
                            <Calendar className="text-primary" />
                            <TypographyH3>
                              {dateLongFormat(event.date)}
                            </TypographyH3>
                          </div>
                        </div>
                        <div>
                          <TypographySmall>
                            {t('card-next-event.closing-date')}
                          </TypographySmall>
                          <div className="flex items-center gap-4">
                            <CalendarX2 className="text-primary" />
                            <TypographyH3>
                              {dateLongFormat(event.registrationClosingDate)}
                            </TypographyH3>
                          </div>
                        </div>
                      </div>
                      <div>
                        <TypographySmall>
                          {t('card-next-event.location')}
                        </TypographySmall>
                        <div className="flex items-center gap-4">
                          <Map className="text-primary" />
                          <a
                            href={event.linkLocation}
                            target="_blank"
                            className="hover:text-primary"
                          >
                            <TypographyH3>{event.location}</TypographyH3>
                          </a>
                        </div>
                      </div>
                      <div>
                        <TypographySmall>
                          {t('card-next-event.cashprize')}
                        </TypographySmall>
                        <TypographyH3 className="text-7xl text-center font-bebas tracking-wide md:text-left">
                          {event.cashPrize}
                        </TypographyH3>
                      </div>
                    </div>
                    <div className="text-center ">
                      <Countdown date={event.date}></Countdown>
                      <div className="w-full flex justify-center mt-10 mb-4 xl:mb-0">
                        <a
                          href={event.linkEvent}
                          target="_blank"
                          className="w-[200px]"
                        >
                          <Button className="cursor-pointer w-full">
                            Iscriviti ora!
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-full md:basis-1/2 flex justify-center items-center z-10">
                  <div className="border rounded-xl overflow-hidden max-w-[500px]">
                    <img
                      src={event.imageUrl}
                      style={{ objectFit: 'contain' }}
                    ></img>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <></>
        )
      }
      loading={
        <div className="h- flex items-center justify-center">
          <LoaderCircle className="size-20 animate-spin" />
        </div>
      }
      error={() => (
        <div className="h-screen flex items-center justify-center">
          <TypographyH1 className="text-center">
            Evento non trovato!
          </TypographyH1>
        </div>
      )}
    />
  );
}
