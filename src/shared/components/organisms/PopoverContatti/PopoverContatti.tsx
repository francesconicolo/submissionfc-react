import {
  TypographyLarge,
  TypographyMuted
} from '@shadcn/components/Typography';
import { Button } from '@shadcn/components/ui/button';

import { Label } from '@shadcn/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@shadcn/components/ui/popover';
import { MessageCircleQuestion } from 'lucide-react';

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
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Contatti</h4>
            <TypographyMuted className="text-sm text-muted-foreground">
              Ti risponderemo il prima possibile!
            </TypographyMuted>
          </div>
          <div className="grid gap-6">
            <div className="gap-4">
              <Label htmlFor="width">Per informazioni generali</Label>
              <TypographyLarge className="pl-2">
                info@submissionfc.it
              </TypographyLarge>
            </div>
            <div className="gap-4">
              <Label htmlFor="width">Per informazioni sulle iscrizioni</Label>
              <TypographyLarge className="pl-2">
                iscrizioni@submissionfc.it
              </TypographyLarge>
            </div>
            <div className="gap-4">
              <Label htmlFor="width">Per proposte commerciali</Label>
              <TypographyLarge className="pl-2">
                business@submissionfc.it
              </TypographyLarge>
            </div>
            <div className="gap-4">
              <Label htmlFor="width">Telefono</Label>
              <TypographyLarge className="pl-2">+39 3274540665</TypographyLarge>
              <TypographyLarge className="pl-2">+39 3280539062</TypographyLarge>
              <TypographyLarge className="pl-2">+39 3347348731</TypographyLarge>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
