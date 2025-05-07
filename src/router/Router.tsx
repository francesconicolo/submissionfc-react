import { BrowserRouter, Routes, Route, Outlet } from 'react-router';
import Faq from 'src/pages/Faq/Faq';
import { HomePage } from 'src/pages/Home/HomePage';
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
          <Route path="/faq" element={<Faq />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
