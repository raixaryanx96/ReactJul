import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 
import './index.css';
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App /> 
  </StrictMode>,
)

// app is rendor inside the main  
