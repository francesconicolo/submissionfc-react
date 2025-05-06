import {
  TypographyMuted,
  TypographySmall
} from '@shadcn/components/Typography';
import { Separator } from '@shadcn/components/ui/separator';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <div>
      <Separator></Separator>
      <div className="bg-background container mx-auto flex flex-col md:flex-row gap-14 justify-between items-center py-8">
        <div className="flex gap-2 h-24 items-center">
          <img src="./icons/logoFull.svg" className="h-24" alt="" />
          <div className="flex flex-col justify-center gap-2">
            <TypographySmall>
              ASD ACCADEMIA NAZIONALE ARTI FISICHE
            </TypographySmall>
            <TypographySmall>P.Iva: 02538270691</TypographySmall>
            <TypographySmall>SS 263, 147, 66010 Villamagna CH</TypographySmall>
          </div>
        </div>
        <div className="flex gap-10">
          <Instagram />
          <Facebook />
          <Youtube />
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <TypographyMuted>Collegamenti utili</TypographyMuted>
            <TypographySmall>Privacy Policy</TypographySmall>
            <TypographySmall>Cookie Policy</TypographySmall>
            <TypographySmall>Aiuto</TypographySmall>
          </div>
          <div className="flex flex-col gap-2">
            <TypographyMuted>Contatti</TypographyMuted>
            <TypographySmall>info@submissionfc.it</TypographySmall>
            <TypographySmall>iscrizioni@submissionfc.it</TypographySmall>
            <TypographySmall>staff@submissionfc.it</TypographySmall>
          </div>
        </div>
      </div>
      <div className="bg-background container mx-auto">
        <Separator></Separator>
        <TypographyMuted className="text-center py-4">
          © {new Date().getFullYear()} ASD ACCADEMIA NAZIONALE ARTI FISICHE -
          Design by{' '}
          <a
            href="https://francesconicolo.dev/"
            className="text-primary"
            target="_blank"
          >
            Francesco Nicolo'
          </a>
        </TypographyMuted>
      </div>
    </div>
  );
}
