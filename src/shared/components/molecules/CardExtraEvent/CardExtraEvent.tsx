import {
  TypographyH2,
  TypographyLarge,
  TypographyP
} from '@shadcn/components/Typography';

import { Card, CardContent } from '@shadcn/components/ui/card';

export default function CardExtraEvent() {
  return (
    <div className="my-16">
      <div className="flex text-muted uppercase gap-4 pl-2">
        <div>Bacci</div>
        <div>Seminario</div>
        <div>BJJ</div>
      </div>
      <Card className="w-full ">
        <CardContent className="flex flex-wrap-reverse w-full justify-center md:justify-between md:flex-nowrap  gap-10 ">
          <div className="flex flex-col justify-between">
            <div>
              <TypographyH2 className="font-bebas font-medium">
                Seminario BJJ-NO-Gi con Dario Bacci
              </TypographyH2>
              <TypographyP className="">
                Il Maestro Dario Bacci, ospite speciale del SUBMISSION FC 1,
                sarà presente per condividere la sua esperienza e il suo sapere.
                Non perdere l'opportunità di allenarti con uno dei più grandi
                esperti del Brazilian Jiu Jitsu in Italia. Con anni di
                esperienza internazionale e una carriera da protagonista nel
                panorama delle arti marziali, il Maestro Bacci è un punto di
                riferimento per chi desidera affinare la propria tecnica e
                migliorare le proprie capacità. Un’occasione unica per
                apprendere da un vero maestro, capace di trasmettere non solo le
                tecniche, ma anche la filosofia che sta alla base di questa
                disciplina.
              </TypographyP>
            </div>
            <div>
              <div className="flex flex-wrap gap-5 my-6 justify-center items-center">
                <Card className=" py-0 h-[50px]">
                  <CardContent className="flex justify-center items-center gap-4 h-full ">
                    <div className="font-bebas font-light text-xl">Costo: </div>
                    <div className="font-bold text-primary text-3xl font-bebas">
                      € 30
                    </div>
                  </CardContent>
                </Card>
                <Card className=" py-0 h-[50px]">
                  <CardContent className="flex justify-center items-center gap-4 h-full">
                    <div className="font-bebas font-light text-xl">Posti: </div>
                    <div className="font-bold text-primary text-3xl font-bebas">
                      Limitati
                    </div>
                  </CardContent>
                </Card>
                <Card className=" py-0 h-[50px]">
                  <CardContent className="flex justify-center items-center gap-4 h-full">
                    <div className="font-bebas font-light text-xl">
                      Prenotazione:
                    </div>
                    <div className="font-bold text-primary text-3xl font-bebas">
                      Necessaria
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <TypographyLarge>
                {' '}
                Prenota il tuo posto inviando un'email a:
                iscrizioni@submissionfc.it{' '}
              </TypographyLarge>
            </div>
          </div>
          <div className="size-[350px] shrink-0 rounded-2xl overflow-hidden ">
            <img
              src="/assetsEvents/SFC1/extraEvent/stage-bacci.jpg"
              className="h-full w-full"
            ></img>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
