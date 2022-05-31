import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './assets/styles/main.scss'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Failed to find the root element')
}
const root = createRoot(rootElement)
root.render(<App />)
