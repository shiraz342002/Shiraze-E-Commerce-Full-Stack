import React from 'react'
import shiraz_logo from "../assets/Website Logo/logo.png"
import { NavLink,Link } from 'react-router-dom'
import {assets} from "../assets/assets.js"
function Navbar() {
  return (
    <div className='flex item-center justify-between py-5 font-medium'>
      <img className='w-20' src={shiraz_logo} alt="" />
      <ul className='hidden sm:flex gap-5 text-sm items-center text-gray-700'>
        <NavLink to='/'className='flex flex-col item-center gap-1'>
            <p>HOME</p> 
            <hr className='w-3/4  border-none h-[1.6px] bg-gray-700 mx-auto  hidden ' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col item-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-3/4  border-none h-[1.6px] bg-gray-700 mx-auto hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col item-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-3/4  border-none h-[1.6px] bg-gray-700 mx-auto hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col item-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-3/4  border-none h-[1.6px] bg-gray-700 mx-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-5 cursor-pointer'>
        <img src={assets.search_icon} alt="Search-Icon" className='w-5' />
        <div className="group relative">
            <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
            <div className='group-hover:block hidden absolute right-0 drop-down-menu pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursto-pointer hover:text-black'>My Profile</p>
                    <p className='cursto-pointer hover:text-black'>My Orders</p>
                    <p className='cursto-pointer hover:text-black'>Logout</p>
                </div>
            </div>
        </div>

        <Link to={'/cart'} className='relative'>
         <img src={assets.cart_icon} className='w-5' alt="Cart Icon" />
             <p className='absolute top-[-10px] right-[-10px] bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
             0   
             </p>
            </Link>
      </div>
    </div>
  )
}

export default Navbar
