import {
  TypographyH4,
  TypographyLarge,
  TypographyMuted
} from '@shadcn/components/Typography';
import { Button } from '@shadcn/components/ui/button';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@shadcn/components/ui/popover';
import { Separator } from '@shadcn/components/ui/separator';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircleQuestion,
  Phone,
  Youtube
} from 'lucide-react';

export function PopoverContatti() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          className="rounded-full size-12 cursor-pointer"
        >
          <MessageCircleQuestion className="size-7" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 mr-10 pb-0">
        <TypographyH4>Contatti</TypographyH4>
        <TypographyMuted>Ti risponderemo il prima possibile!</TypographyMuted>
        <div className="py-3">
          <div className="flex items-center gap-2">
            <MapPin className="size-5" />
            <TypographyLarge className="">Indirizzo</TypographyLarge>
          </div>
          <div className="ml-7">
            <TypographyMuted>
              SS 263, 147, 66010 <br />
              Villamagna CH <br /> Italia
            </TypographyMuted>
          </div>
        </div>
        <div className="py-3">
          <div className="flex items-center gap-2">
            <Phone className="size-5" />
            <TypographyLarge className="">Telefono</TypographyLarge>
          </div>
          <div className="ml-7">
            <TypographyMuted className="cursor-pointer hover:text-foreground">
              +39 3274540665
            </TypographyMuted>
            <TypographyMuted className="cursor-pointer hover:text-foreground">
              +39 3280539062
            </TypographyMuted>
            <TypographyMuted className="cursor-pointer hover:text-foreground">
              +39 3347348731
            </TypographyMuted>
          </div>
        </div>
        <div className="py-3">
          <div className="flex items-center gap-2">
            <Mail className="size-5" />
            <TypographyLarge className="">Email</TypographyLarge>
          </div>
          <div className="ml-7">
            <TypographyMuted className="cursor-pointer hover:text-foreground">
              info@submissionfc.it
            </TypographyMuted>
            <TypographyMuted className="cursor-pointer hover:text-foreground">
              iscrizioni@submissionfc.it
            </TypographyMuted>
            <TypographyMuted className="cursor-pointer hover:text-foreground">
              business@submissionfc.it
            </TypographyMuted>
          </div>
        </div>
        <Separator></Separator>
        <div className="flex justify-center gap-6 py-3">
          <Instagram className="text-muted-foreground size-5 hover:text-foreground" />
          <Facebook className="text-muted-foreground size-5 hover:text-foreground" />
          <Youtube className="text-muted-foreground size-5 hover:text-foreground" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
