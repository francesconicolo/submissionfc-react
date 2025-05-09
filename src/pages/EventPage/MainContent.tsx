import {
  TypographyBlockquote,
  TypographyH1
} from '@shadcn/components/Typography';
import { Separator } from '@shadcn/components/ui/separator';

import { Event } from 'src/model/event';
import { CardGuest } from 'src/shared/components/atoms/CardGuest';
import { DialogImg } from 'src/shared/components/atoms/DialogImg';
import CardEvent from 'src/shared/components/molecules/CardEvent/CardEvent';
import CardExtraEvent from 'src/shared/components/molecules/CardExtraEvent/CardExtraEvent';
import { CarouselPartners } from 'src/shared/components/organisms/CarouselPartners/CarouselPartners';

const partners = [
  {
    name: 'Doritos',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/it/thumb/0/04/Doritos_logo_%282013%29.png/1200px-Doritos_logo_%282013%29.png',
    linkWebsite: 'https://www.doritos.it/it-IT/'
  },
  {
    name: 'Ferrari',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/it/thumb/5/59/Logo_della_Scuderia_Ferrari_%28vecchio%29.svg/1200px-Logo_della_Scuderia_Ferrari_%28vecchio%29.svg.png',
    linkWebsite: 'https://www.ferrari.com/it-IT/'
  },
  {
    name: 'Pompeo Team',
    imageUrl: 'https://pompeoteam.it/images/logoASD.png',
    linkWebsite: 'https://pompeoteam.it/'
  },
  {
    name: 'Peroni',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/d/dd/LOGO_PERONI_CORPORATE_RGB.png',
    linkWebsite: 'https://www.peroni.it/'
  },
  {
    name: 'Samsung',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
    linkWebsite: 'https://www.samsung.com/it/'
  },
  {
    name: 'GLD',
    imageUrl:
      'https://www.gldforniture.it/media/logo/stores/1/logo-gld-sito.png',
    linkWebsite: 'https://www.gldforniture.it/'
  },
  {
    name: 'Pringles',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/it/thumb/4/4e/Logo_delle_Pringles.svg/1200px-Logo_delle_Pringles.svg.png',
    linkWebsite: 'https://www.pringles.it/'
  }
];

const guests = [
  {
    name: 'Angelo Pompeo',
    nationality: 'it',
    lastTitle: 'Campione nazionale di brazilian Jiu Jitsu',
    socials: ['https://www.instagram.com/']
  },
  {
    name: 'Alessandro Alessandrini',
    nationality: 'it',
    lastTitle: 'Last title',
    socials: ['https://www.instagram.com/']
  },
  {
    name: 'Carlo el Sendero Mago',
    nationality: 'es',
    lastTitle: 'Campione mondiale pesi leggeri jiu jitsu',
    socials: ['https://www.instagram.com/']
  },
  {
    name: 'Vasco Rossi',
    nationality: 'br',
    lastTitle: 'Cantante vero e proprio',
    socials: ['https://www.instagram.com/']
  },
  {
    name: 'Adriano celentano',
    nationality: 'br',
    lastTitle: 'Molleggiato di brazilian Jiu Jitsu',
    socials: ['https://www.instagram.com/']
  }
];

export default function MainContent({ event }: { event: Event }) {
  return (
    <div>
      <div className="container mx-auto px-2 md:px-0 mt-48">
        <TypographyH1 className="font-bebas ">
          SUBMISSION FIGHTING CHAMPIONSHIP{' '}
        </TypographyH1>
        <div className="text-primary text-lg font-bebas tracking-widest">
          presenta
        </div>
        <Separator></Separator>
        <CardEvent event={event}></CardEvent>
        <TypographyH1 className="mt-32">Eventi</TypographyH1>
        <TypographyBlockquote className="not-italic">
          Un'occasione da non perdere: scopri gli eventi speciali che renderanno
          unica la tua esperienza al {event.name}.
        </TypographyBlockquote>
        <CardExtraEvent></CardExtraEvent>

        {/* GALLERIA VIDEO */}
        <TypographyH1 className="mt-32">Ospiti speciali</TypographyH1>
        <TypographyBlockquote className="not-italic">
          Non sono semplici ospiti: sono protagonisti che lasciano un'impronta
          indelebile. Loro, insieme a voi, trasformano questo evento in qualcosa
          di unico.
        </TypographyBlockquote>
        <div className="flex w-full gap-4 flex-wrap my-16 justify-center">
          <CardGuest guest={guests[0]}></CardGuest>
          <CardGuest guest={guests[2]}></CardGuest>
          <CardGuest guest={guests[1]}></CardGuest>
        </div>
        {/* GALLERIA FOTO */}
        <TypographyH1 className="mt-32">Galleria</TypographyH1>
        <TypographyBlockquote className="not-italic">
          Non è solo un ricordo: è un'esperienza che ti colpisce, ti scuote, ti
          costringe a non dimenticare. Rivivi la potenza di quel giorno.
        </TypographyBlockquote>
        <div id="photos" className="my-16">
          {Array.from({ length: 14 }, (_, index) => (
            <DialogImg
              key={index}
              src={`/assetsEvents/SFC1/img/sfc${index + 1}.jpg`}
            ></DialogImg>
          ))}
        </div>
      </div>
      <CarouselPartners partners={partners}></CarouselPartners>
    </div>
  );
}
