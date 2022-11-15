import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Page } from './components/Page';
import { useBrowserDetect } from './hooks';

const App: FC = () => {
  useBrowserDetect();

  return (
    <Router>
      <main>
        <Page />
      </main>
    </Router>
  );
};

export { App };
