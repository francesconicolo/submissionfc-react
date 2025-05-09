import SwitchLocale from '../../molecules/SwitchLocale/SwitchLocale';
import { useTranslation } from 'react-i18next';
import { SwitchTheme } from '../../molecules/SwitchTheme/SwitchTheme';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useIsMobile } from '@shadcn/hooks/use-mobile';
import { useLocation, useNavigate } from 'react-router';
import { TypographyNavbar } from '@shadcn/components/Typography/TypographyNavbar';

export default function AppNavbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigateTo = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);
  const navigate = (path: string) => {
    window.scrollTo(0, 0);
    setOpen(false);
    navigateTo(path);
  };
  const location = useLocation();
  if (isMobile) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md h-18 transition-colors duration-500 md:hidden ">
        <div className="container mx-auto h-full flex justify-between">
          <div
            className="flex items-center h-full px-4"
            onClick={() => navigate('/')}
          >
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
            <TypographyNavbar onClick={() => navigate('/')}>
              {t('navbar.home')}
            </TypographyNavbar>
            <TypographyNavbar onClick={() => navigate('/events')}>
              {t('navbar.events')}
            </TypographyNavbar>
            <TypographyNavbar onClick={() => navigate('/regulation')}>
              {t('navbar.regulation')}
            </TypographyNavbar>
            <TypographyNavbar onClick={() => navigate('/faq')}>
              {t('navbar.faq')}
            </TypographyNavbar>
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
          'fixed top-0 left-0 right-0 z-50 h-18 hidden transition-colors duration-500 md:block ' +
          (location.pathname != '/' || scrollPosition > 300
            ? 'bg-background shadow-md'
            : 'bg-transparent text-white')
        }
      >
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <div className="w-[180px] flex  " onClick={() => navigate('/')}>
              <img
                src="/icons/logoFull.svg "
                className="h-16 cursor-pointer "
                alt=""
              />
            </div>
            <nav className="flex gap-10 items-center justify-center">
              <TypographyNavbar onClick={() => navigate('/')}>
                {t('navbar.home')}
              </TypographyNavbar>
              <TypographyNavbar onClick={() => navigate('/events')}>
                {t('navbar.events')}
              </TypographyNavbar>
              <TypographyNavbar onClick={() => navigate('/regulation')}>
                {t('navbar.regulation')}
              </TypographyNavbar>
              <TypographyNavbar onClick={() => navigate('/faq')}>
                {t('navbar.faq')}
              </TypographyNavbar>
            </nav>
            <div className={' flex gap-4 items-center justify-end w-[180px] '}>
              <SwitchTheme
                colors={
                  location.pathname != '/' || scrollPosition > 300
                    ? 'text-foreground'
                    : 'text-white'
                }
              ></SwitchTheme>
              <SwitchLocale></SwitchLocale>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
