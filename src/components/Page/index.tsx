import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Home';
import { NotFoundPage } from './NotFoundPage';
import pageStyles from './style.module.scss';

const pageClassName = 'page';

const Page = () => (
  <div className={pageStyles[pageClassName]}>
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  </div>
);

export { Page };
