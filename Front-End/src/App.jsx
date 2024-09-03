import React from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import Collection from './Pages/Collection';
import Product from './pages/Product';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import Login from './Pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminPanel from './Pages/AdminPanel';
import { Route,Routes } from 'react-router-dom';
import MyProfile from './Pages/MyProfile';
import Test from './Pages/Test';
import Home from './Pages/Home';
const App = () => {
  const location = useLocation();
  const isAdminPanel = location.pathname === '/adminpanel';

  return (
    <div className={!isAdminPanel ? "px-4 sm:px-6 md:px-8 lg:px-28" : ""}>
      <ToastContainer/>
      {!isAdminPanel && <Navbar />}
      {!isAdminPanel && <SearchBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/adminpanel' element={<AdminPanel />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/test' element={<Test />} />

      </Routes>
      {!isAdminPanel && <Footer />}
    </div>
  );
}

export default App;
