import { BrowserRouter, Routes, Route, Outlet } from 'react-router';
import FaqPage from 'src/pages/Faq/FaqPage';

import { HomePage } from 'src/pages/Home/HomePage';
import RegulationPage from 'src/pages/Regulation/RegulationPage';
import { TemplateBasePage } from 'src/shared/components/templates/TemplateBasePage';

export const Router = () => {
  return (
    <BrowserRouter>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
