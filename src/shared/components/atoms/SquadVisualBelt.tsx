import { TypographyMuted } from '@shadcn/components/Typography';
import { Bandage } from 'lucide-react';

export default function SquadVisualBelt({
  squad,
  operator,
  yearsOfExperience,
  title
}: {
  squad: string[];
  operator: string;
  yearsOfExperience: string;
  title: string;
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
      <TypographyMuted className="pl-1 mt-4 mb-2">{title}</TypographyMuted>
      <div className="size-[200px] bg-card shadow rounded-2xl border">
        <div className="grid grid-cols-2 grid-rows-3 h-full">
          {squad.map((member) => (
            <div
              className={
                'h-full flex flex-col justify-center items-center row-span-2 ' +
                (squad.length > 1 ? ' ' : ' col-span-2')
              }
              key={Math.random()}
            >
              <Bandage
                className={
                  'size-14 bg-white rounded-full p-2 shadow-xs ' +
                  (colors[member.toLowerCase() as keyof typeof colors] ||
                    'text-gray-500')
                }
              />
              <TypographyMuted className="first-letter:uppercase">
                {member} Belt
              </TypographyMuted>
            </div>
          ))}

          <div className="col-span-2 flex justify-center items-center relative">
            <div className="absolute -top-2.5">{operator}</div>
            <div className="font-semibold text-[1.1rem]">
              {yearsOfExperience}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
