import {
  TypographyLarge,
  TypographyMuted
} from '@shadcn/components/Typography';
import { ArrowDown, Shirt } from 'lucide-react';

export default function DressVisual({
  color,
  dressDescription,
  yearsOfExperience
}: {
  color: string;
  dressDescription: string;
  yearsOfExperience: string;
}) {
  const colors = {
    red: 'text-red-500',
    blue: 'text-blue-500',
    brown: 'text-amber-900',
    white: 'text-zinc-500',
    purple: 'text-violet-500',
    black: 'text-zinc-900'
  };
  return (
    <div className="">
      <div className="w-[240px] h-[200px] bg-card shadow rounded-2xl border px-4">
        <div className="grid grid-cols-2 grid-rows-3 h-full relative">
          <TypographyLarge className="col-span-2 flex justify-center items-center text-[1.02rem]">
            {yearsOfExperience}
          </TypographyLarge>
          <div className="col-span-2 row-span-2 flex flex-col justify-center items-center relative">
            <ArrowDown className="absolute left-1/2 -translate-x-1/2 -top-3" />
            <Shirt
              className={
                'size-20 ' +
                (colors[color.toLowerCase() as keyof typeof colors] ||
                  'text-gray-500')
              }
            />
            <TypographyMuted className="text-xs">
              {dressDescription}
            </TypographyMuted>
          </div>
        </div>
      </div>
    </div>
  );
}
