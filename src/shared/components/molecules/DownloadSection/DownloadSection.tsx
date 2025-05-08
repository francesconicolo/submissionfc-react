import { TypographyH4, TypographyMuted } from '@shadcn/components/Typography';
import { Button } from '@shadcn/components/ui/button';
import { Card, CardContent } from '@shadcn/components/ui/card';
import { ArrowDownToLine, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function DownloadSection() {
  const { t } = useTranslation();
  return (
    <Card className="max-w-[700px] border-2 min-h-[120px] ">
      <CardContent className="flex flex-col gap-4 md:flex-row justify-between items-center h-full">
        <div className="aspect-square min-h-[70px] rounded-2xl shadow bg-card-foreground">
          <FileText className="z-20 size-full p-2 text-background " />
        </div>
        <div className="h-full px-5">
          <TypographyH4>{t('regulation.title-download')}</TypographyH4>
          <TypographyMuted>
            {t('regulation.muted-text-download')}
          </TypographyMuted>
        </div>
        <div>
          <a
            href={'./regolamento/' + t('regulation.fileName')}
            download={t('regulation.fileName')}
          >
            <Button className="cursor-pointer">
              <ArrowDownToLine />
              Download
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
