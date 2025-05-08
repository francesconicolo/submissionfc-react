import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Countdown({ date }: { date: Date }) {
  const { t } = useTranslation();

  const [countdown, setCountdown] = useState<{
    d: string;
    h: string;
    m: string;
    s: string;
  }>({ d: '0', h: '0', m: '0', s: '0' });

  const countDown = (
    date: Date
  ): { d: string; h: string; m: string; s: string } => {
    const now = new Date().getTime();
    const distance = date.getTime() - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return {
      d: days.toString(),
      h: hours.toString(),
      m: minutes.toString(),
      s: seconds.toString()
    };
  };

  useEffect(() => {
    if (date) {
      const interval = setInterval(() => {
        setCountdown(countDown(date));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [date]);

  return (
    <div className="w-full mt-4 flex justify-center font-bebas ">
      <div className="grid grid-cols-2 gap-5 text-7xl md:flex md:gap-6 md:text-7xl">
        <div className="flex flex-col justify-center items-center min-w-[100px]">
          <div className="font-bold">
            {countdown.d.length === 1 ? `0${countdown.d}` : countdown.d}
          </div>
          <div className="text-sm font-medium tracking-wider">
            {t('countdown.days')}
          </div>
        </div>
        <div className="hidden md:border-r-4 md:block"></div>
        <div className="flex flex-col justify-center items-center min-w-[100px]">
          <div className="font-bold">
            {countdown.h.length === 1 ? `0${countdown.h}` : countdown.h}
          </div>
          <div className="text-sm font-medium tracking-wider">
            {t('countdown.hours')}
          </div>
        </div>
        <div className="hidden md:border-r-4 md:block"></div>
        <div className="flex flex-col justify-center items-center min-w-[100px]">
          <div className="font-bold">
            {countdown.m.length === 1 ? `0${countdown.m}` : countdown.m}
          </div>
          <div className="text-sm font-medium tracking-wider">
            {t('countdown.minutes')}
          </div>
        </div>
        <div className="hidden md:border-r-4 md:block"></div>
        <div className="flex flex-col justify-center items-center min-w-[100px]">
          <div className="font-bold">
            {countdown.s.length === 1 ? `0${countdown.s}` : countdown.s}
          </div>
          <div className="text-sm font-medium tracking-wider">
            {t('countdown.seconds')}
          </div>
        </div>
      </div>
    </div>
  );
}
