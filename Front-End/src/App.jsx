import React from 'react'
import Home from './Pages/Home'
import {Routes,Route} from "react-router-dom"
import Collection from './Pages/Collection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Product from './Pages/Product'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import Order from './Pages/Order'
import Login from './Pages/Login'
import About from './Pages/About'
import Contact from './Pages/Contact'
const App = () => {
  return (
    <div class="px-4 sm:px-6 md:px-8 lg:px-28">
    <ToastContainer/>
    <Navbar/>
    <SearchBar/>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/collection'element={<Collection/>}></Route>
        <Route path='/product/:productId' element={<Product/>}></Route>
        <Route path='/cart'element={<Cart/>}></Route>
        <Route path='/place-order'element={<PlaceOrder/>}></Route>
        <Route path='/orders'element={<Order/>}></Route>
        <Route path='/login'element={<Login/>}></Route>
        <Route path='/about'element={<About/>}></Route>
        <Route path='/contact'element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App