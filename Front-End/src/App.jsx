import React from 'react'
import Home from './Pages/Home'
import {Routes,Route} from "react-router-dom"
import Collection from './Pages/Collection'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div class="px-4 sm:px-6 md:px-8 lg:px-28">
    <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/collection'element={<Collection/>}></Route>
      </Routes>
    </div>
  )
}

export default App
