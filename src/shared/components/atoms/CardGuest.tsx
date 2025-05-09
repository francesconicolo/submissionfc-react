import { TypographyH3 } from '@shadcn/components/Typography';
import { Card, CardHeader, CardContent } from '@shadcn/components/ui/card';
import { Separator } from '@shadcn/components/ui/separator';
import { Instagram } from 'lucide-react';

import Flag from 'react-world-flags';
import { Guest } from 'src/model/guest';

export function CardGuest({ guest }: { guest: Guest }) {
  return (
    <Card className="w-[300px] pb-2">
      <CardHeader className="flex justify-center items-center ">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-2 shadow-md relative">
          <img
            src="/icons/exampleGuestCard.webp"
            className="w-full h-full object-cover absolute"
            alt="Profile"
          />
        </div>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center justify-center gap-2">
            <TypographyH3 className="font-bebas font-medium text-center flex items-start tracking-wide ">
              {guest.name}
            </TypographyH3>
            <Flag
              code={guest.nationality ? guest.nationality : 'it'}
              width={30}
            ></Flag>

            <Separator></Separator>
            <div className="flex items-center justify-center gap-4  ">
              {guest.socials.map((social) => {
                return (
                  <a href={social} target="_blank" rel="noreferrer">
                    <Instagram className="text-muted-foreground cursor-pointer hover:text-foreground size-7"></Instagram>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
