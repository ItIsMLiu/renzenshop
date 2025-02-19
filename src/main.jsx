import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./style/Global.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
