import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/index.scss'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes.tsx'

createRoot(document.getElementById('body')!).render(
  <StrictMode>
    <HashRouter basename='/fancy-ui'>
      <Routes />
    </HashRouter>
  </StrictMode>,
)
