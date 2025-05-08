import { TypographyLarge } from '@shadcn/components/Typography';
import { User } from 'lucide-react';

export default function SquadVisualWeight({
  nameExample,
  operator,
  squad
}: {
  nameExample: string;
  operator: string;
  squad: string[];
}) {
  return (
    <div className="">
      <TypographyLarge className="pl-1 mt-4 mb-2">
        {nameExample}
      </TypographyLarge>
      <div className="size-[260px] bg-card shadow rounded-2xl border">
        <div className="grid grid-cols-2 grid-rows-2 h-full relative">
          {squad.map((weight) => (
            <div
              className={
                'h-full flex flex-col justify-center items-center ' +
                (squad.length > 1 ? 'col-span-2' : ' col-span-2 row-span-2')
              }
              key={Math.random()}
            >
              <User
                className={'size-14 bg-white rounded-full p-2 shadow-sm '}
              />
              <TypographyLarge>{weight}</TypographyLarge>
            </div>
          ))}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            {squad.length > 1 && operator}
          </div>
        </div>
      </div>
    </div>
  );
}
