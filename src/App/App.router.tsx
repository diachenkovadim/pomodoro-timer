import { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Focus } from 'screens/Focus';
import { ShortBreak } from 'screens/ShortBreak';
import { LongBreak } from 'screens/LongBreak';

import { Layout } from 'components/Layout';

import { ROUTES } from 'constants/routes';

export const AppRpouter: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.focus} element={<Layout />}>
        <Route index element={<Focus />} />
        <Route path={ROUTES.shortBreak} element={<ShortBreak />} />
        <Route path={ROUTES.longBreak} element={<LongBreak />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
