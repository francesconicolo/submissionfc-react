import SwitchLocale from '../../molecules/SwitchLocale/SwitchLocale';
import { TypographyLarge } from '@shadcn/components/Typography';
import { useTranslation } from 'react-i18next';
import { SwitchTheme } from '../../molecules/SwitchTheme/SwitchTheme';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useIsMobile } from '@shadcn/hooks/use-mobile';

export default function AppNavbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  if (isMobile) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md h-16 transition-colors duration-500 md:hidden ">
        <div className="container mx-auto h-full flex justify-between">
          <div className="flex items-center h-full px-4">
            <img src="./icons/logoFull.svg" className="h-14" alt="" />
          </div>
          <div className="flex items-center h-full px-4">
            {open ? (
              <X onClick={() => setOpen(!open)} className="text-primary" />
            ) : (
              <Menu onClick={() => setOpen(!open)} className="text-primary" />
            )}
          </div>
        </div>
        <div
          className={
            'h-screen bg-background flex items-center justify-center flex-col transition-transform duration-300 ' +
            (open ? ' translate-x-0' : ' translate-x-full')
          }
        >
          <div className="gap-6 flex flex-col pb-28 text-center">
            <TypographyLarge>
              <a href="/">{t('navbar.home')}</a>
            </TypographyLarge>
            <TypographyLarge>
              <a href="/">{t('navbar.events')}</a>
            </TypographyLarge>
            <TypographyLarge>
              <a href="/">{t('navbar.regulation')}</a>
            </TypographyLarge>
            <TypographyLarge>
              <a href="/">{t('navbar.faq')}</a>
            </TypographyLarge>
          </div>
          <div className="flex gap-4 items-center  ">
            <SwitchTheme></SwitchTheme>
            <SwitchLocale></SwitchLocale>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={
          'fixed top-0 left-0 right-0 z-50  h-18 hidden transition-colors duration-500 md:block ' +
          (scrollPosition > 300
            ? 'bg-background shadow-md'
            : 'bg-transparent text-white')
        }
      >
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <div className="">
              <img src="./icons/logoFull.svg" className="h-16" alt="" />
            </div>
            <nav className="flex gap-6 items-center ">
              <TypographyLarge className="hover:text-primary transition-colors duration-200">
                {t('navbar.home')}
              </TypographyLarge>
              <TypographyLarge className="hover:text-primary transition-colors duration-200">
                {t('navbar.events')}
              </TypographyLarge>
              <TypographyLarge className="hover:text-primary transition-colors duration-200">
                {t('navbar.regulation')}
              </TypographyLarge>
              <TypographyLarge className="hover:text-primary transition-colors duration-200">
                {t('navbar.faq')}
              </TypographyLarge>
            </nav>
            <div className="flex gap-4 items-center">
              <SwitchTheme></SwitchTheme>
              <SwitchLocale></SwitchLocale>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
