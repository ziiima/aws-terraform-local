import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElm = document.getElementById('root')
if(!rootElm) {
  throw new Error("can not find dom dayo")
}

createRoot(rootElm).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
