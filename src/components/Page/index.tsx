import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Home';
import { NotFoundPage } from './NotFoundPage';
import pageStyles from './style.module.scss';

const pageClassName = 'page';

const Page: FC = () => (
  <div className={pageStyles[pageClassName]}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export { Page };
