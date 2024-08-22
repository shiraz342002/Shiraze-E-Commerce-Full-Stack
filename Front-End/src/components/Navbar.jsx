import React from 'react'
import shiraz_logo from "../assets/Website Logo/logo.png"
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='flex item-center justify-between py-5 font-medium'>
      <img className='w-20' src={shiraz_logo} alt="" />
      <ul className='hidden sm:flex gap-5 text-sm items-center text-gray-700'>
        <NavLink className='flex flex-col item-center gap-1'>
            <p>HOME</p>
            <hr className='w-3/4  border-none h-[1.6px] bg-gray-700 mx-auto ' />
        </NavLink>
        <NavLink className='flex flex-col item-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-3/4  border-none h-[1.6px] bg-gray-700 mx-auto' />
        </NavLink>
        <NavLink className='flex flex-col item-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-3/4  border-none h-[1.6px] bg-gray-700 mx-auto' />
        </NavLink>
        <NavLink className='flex flex-col item-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-3/4  border-none h-[1.6px] bg-gray-700 mx-auto' />
        </NavLink>
      
      </ul>
    </nav>
  )
}

export default Navbar
