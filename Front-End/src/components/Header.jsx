import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 p-0 sm:p-0'>
      <div className="w-full sm:w-1/2 flex items-center justify-center py-6 sm:py-8">
        <div className='text-[#414141] text-center sm:text-left max-w-md'>
          <div className='flex items-center gap-3 justify-center sm:justify-start'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      <div className='w-full sm:w-1/2 flex items-center justify-center'>
        <img className='w-full h-auto object-cover' src={assets.hansdsome_man3} alt="Hero" />
      </div>
    </div>
  )
}

export default Header
