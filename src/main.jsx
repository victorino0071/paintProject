import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { PresentColorProvider } from './components/colorpick/presentColor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PresentColorProvider>
      <App />
    </PresentColorProvider>

  </StrictMode>
)
