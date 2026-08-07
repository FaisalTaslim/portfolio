import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/base/global.css'
import './styles/base/dark-theme.css'
import './styles/user-interface/forms.css'
import './styles/user-interface/scrollbar.css'
import './styles/user-interface/selection.css'
import './assets/fonts/font-size.css'
import './assets/fonts/font-family.css'
import './assets/fonts/text-properties.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
