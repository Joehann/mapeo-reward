import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './core/styles/index.scss'
import App from './App.tsx'
import {PresenterProvider} from "./react/contexts/presenters.context.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <PresenterProvider>
          <App/>
      </PresenterProvider>
  </StrictMode>,
)
