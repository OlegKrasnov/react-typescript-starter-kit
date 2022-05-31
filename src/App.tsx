import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Page } from './components/Page'

const App: FC = () => (
  <Router>
    <main>
      <Page />
    </main>
  </Router>
)

export { App }
