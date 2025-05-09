import { TypographyH2 } from '@shadcn/components/Typography';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@shadcn/components/ui/carousel';

import AutoScroll from 'embla-carousel-auto-scroll';

export function CarouselPartners({
  partners
}: {
  partners: { name: string; imageUrl: string; linkWebsite: string }[];
}) {
  if (partners.length === 0) return null;
  return (
    <section className="py-40">
      <TypographyH2 className="font-bebas text-center container mx-auto px-2 md:px-0 lg:max-w-5xl">
        Event sponsored by
      </TypographyH2>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center w-full container lg:max-w-5xl ">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              AutoScroll({
                playOnInit: true,
                speed: 1,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
                startDelay: 1
              })
            ]}
          >
            <CarouselContent className="ml-0 ">
              {partners.map((partner, index) => (
                <CarouselItem
                  key={index}
                  className="flex basis-1/3 justify-center items-center  sm:basis-1/4 md:basis-1/5  "
                >
                  <a
                    href={partner.linkWebsite}
                    className="w-full h-[150px] flex items-center justify-center mx-5 "
                    target="_blank"
                  >
                    <img
                      src={partner.imageUrl}
                      alt={partner.name}
                      className={'object-cover max-h-full'}
                    />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
