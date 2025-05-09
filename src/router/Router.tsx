import { useLayoutEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation
} from 'react-router';
import EventPage from 'src/pages/EventPage/EventPage';

import FaqPage from 'src/pages/Faq/FaqPage';

import { HomePage } from 'src/pages/Home/HomePage';
import RegulationPage from 'src/pages/Regulation/RegulationPage';
import { TemplateBasePage } from 'src/shared/components/templates/TemplateBasePage';

import { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route
            element={
              <TemplateBasePage>
                <Outlet />
              </TemplateBasePage>
            }
          >
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/faq" element={<FaqPage />}></Route>
            <Route path="/regulation" element={<RegulationPage />}></Route>
            <Route path="/event/:id" element={<EventPage />}></Route>
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};
