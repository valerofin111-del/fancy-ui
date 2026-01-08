import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/index.scss'
import Routes from './Routes.tsx'

createRoot(document.getElementById('body')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
