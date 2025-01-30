
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContex.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <div>
      <App />
    </div>
  </ThemeProvider>
  ,
)
