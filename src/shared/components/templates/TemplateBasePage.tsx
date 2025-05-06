import { FC, PropsWithChildren } from 'react';
import AppNavbar from '../organisms/Navbar/AppNavbar';
import Footer from '../organisms/Footer/Footer';

import { PopoverContatti } from '../organisms/PopoverContatti/PopoverContatti';

export const TemplateBasePage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppNavbar />
      {children}
      <div className="fixed bottom-4 right-4 md:bottom-10 md:right-14 z-30">
        <PopoverContatti></PopoverContatti>
      </div>
      <Footer></Footer>
    </>
  );
};
