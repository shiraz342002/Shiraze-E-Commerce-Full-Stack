import {BrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreContextProvider from "./Store/StoreContext.jsx"
// https://youtu.be/ZF73dpgRrWI?t=16459
// https://forever-ecom.vercel.app/
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
  </BrowserRouter>
)
