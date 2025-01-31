
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContex.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <div>
        <App />
      </div>
    </ThemeProvider>
  </BrowserRouter>

  ,
)
