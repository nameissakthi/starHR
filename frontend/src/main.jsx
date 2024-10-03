import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CompanyContextProvider from './context/CompanyContext.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <CompanyContextProvider>
        <App />
      </CompanyContextProvider>
   </BrowserRouter>,
)
