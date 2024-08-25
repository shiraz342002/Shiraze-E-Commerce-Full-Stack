import React from 'react'
import { assets } from '../assets/assets'
import 'remixicon/fonts/remixicon.css';

const Footer = () => {
  return (
    <div>
   <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
    <div className=''>
        <img src={assets.logo} className=' w-24' alt="" />
        <p className='w-full md:w-1/3 font-medium text-gray-600'>
         Discover a world of premium fabrics at Shiraz-Fabrics, your ultimate online destination for quality textiles. 
        </p>
    </div>
    <div className=''>
        <p className='text-xl font-medium mb-2'>Company</p>
        <ul className='flex flex-col gap-1 text-grat-600'>
            <li>Home</li>
            <li>About US</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
    <div className=''>
        <p className='text-xl font-medium mb-2'>FOLLOW US ON</p>
        <ul className='flex flex-col gap-1 text-grat-600'>
        <li>
        <i className="ri-facebook-fill" style={{ marginRight: '8px' }}></i>
        ShirazFabrics
      </li>
      <li>
        <i className="ri-twitter-fill" style={{ marginRight: '8px' }}></i>
        @Shiraz_Fabric
      </li>
      <li>
        <i className="ri-instagram-line" style={{ marginRight: '8px' }}></i>
        @Shiraz_fabric
      </li>
      <li>
        <i className="ri-global-line" style={{ marginRight: '8px' }}></i>
        <a href="http://www.ShirazFabric.com" target="_blank" rel="noopener noreferrer">
          www.ShirazFabric.com
        </a>
      </li>
        </ul>
    </div>
    <div>
    <p className='text-xl font-medium mb-2'>GET IN TOUCH</p>
    <ul className='flex flex-col gap-1 text-grat-600'>
            <li>0302323269</li>
            <li>imshiraz007@gmail.com</li>
            <li>@ShirazFabric</li>
        </ul>
    </div>
  </div>
  <div>
  <br />
    <hr />
    <p className='py-5 text-sm text-center'>Copyright 2024@ ShirazFabric - All Right Reserved.</p>
  </div>
 </div>
  )
}

export default Footer
