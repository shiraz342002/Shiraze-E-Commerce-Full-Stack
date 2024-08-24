import React from 'react'
import Home from './Pages/Home'
import {Routes,Route} from "react-router-dom"
import Collection from './Pages/Collection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Product from './Pages/Product'
const App = () => {
  return (
    <div class="px-4 sm:px-6 md:px-8 lg:px-28">
    <Navbar/>
    <SearchBar/>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/collection'element={<Collection/>}></Route>
        <Route path='/product/:productId' element={<Product/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
