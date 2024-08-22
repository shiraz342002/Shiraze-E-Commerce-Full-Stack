import {BrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// https://youtu.be/ZF73dpgRrWI?t=2799
// https://forever-ecom.vercel.app/
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
