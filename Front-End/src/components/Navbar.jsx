import React, { useContext, useState } from 'react'
import shiraz_logo from "../assets/Website-Logo/logo.png"
import { NavLink, Link } from 'react-router-dom'
import { assets } from "../assets/assets.js"
import { StoreContext } from '../Store/StoreContext.jsx'


function Navbar() {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount, navigate } = useContext(StoreContext)

  return (
    <nav className='flex item-center justify-between py-5 font-medium'>
      <Link to={'/'}>
        <img className='w-20 cursor-pointer' src={shiraz_logo} alt="" />
      </Link>
      <ul className='hidden sm:flex gap-5 text-sm items-center text-gray-700'>
        <NavLink to='/' className='flex flex-col item-center gap-1'>
          <p className='text-base'>HOME</p>
          <hr className='w-3/4  border-none h-[1.6px] bg-gray-700 mx-auto  hidden ' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col item-center gap-1'>
          <p className='text-base'>COLLECTION</p>
          <hr className='w-3/4  border-none h-[1.6px] bg-gray-700 mx-auto hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col item-center gap-1'>
          <p className='text-base'>ABOUT</p>
          <hr className='w-3/4  border-none h-[1.6px] bg-gray-700 mx-auto hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col item-center gap-1'>
          <p className='text-base'>CONTACT</p>
          <hr className='w-3/4  border-none h-[1.6px] bg-gray-700 mx-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-5 cursor-pointer'>
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="Search-Icon" className='w-5' />
        <div className="group relative">
          <Link to='/login'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
          </Link>
          <div className='group-hover:block hidden absolute right-0 drop-down-menu pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursto-pointer hover:text-black'>My Profile</p>
              <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>
                My Orders
              </p>
              <p className='cursto-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5' alt="Cart Icon" />
          <p className='absolute top-[-10px] right-[-10px] bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
            {getCartCount()}
          </p>
        </Link>
        <img onClick={() => { setVisible(true) }} src={assets.menu_icon} alt="" className='w-5 sm:hidden cursor-pointer ' />
      </div>
      <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all overflow-hidden ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-700'>
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3">
            <img className='h-4 rotate-180 cursor-pointer text-black' src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
        </div>
        <NavLink onClick={() => setVisible(false)} className='flex py-1 pl-4 border content-center items-center flex-col hover:bg-black hover:text-white' to='/'>HOME</NavLink>
        <NavLink onClick={() => setVisible(false)} className='flex py-1 pl-4 border content-center items-center flex-col hover:bg-black hover:text-white' to='/collection'>COLLECTION</NavLink>
        <NavLink onClick={() => setVisible(false)} className='flex py-1 pl-4 border content-center items-center flex-col hover:bg-black hover:text-white' to='/about'>ABOUT</NavLink>
        <NavLink onClick={() => setVisible(false)} className='flex py-1 pl-4 border content-center items-center flex-col hover:bg-black hover:text-white' to='/contact'>CONTACT</NavLink>
      </div>

    </nav>
  )
}

export default Navbar
