import React from 'react'
import { assets } from "../assets/front-end-assets/assets";
import 'remixicon/fonts/remixicon.css';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col lg:grid lg:grid-cols-4 gap-14 my-10 mt-40 text-sm'>
        <div className='lg:col-span-1'>
          <img src={assets.logo} className='w-24' alt="Logo" />
          <p className='w-full md:w-2/3 lg:w-full font-medium text-gray-600 mt-4'>
            Discover a world of premium fabrics at Shiraz-Fabrics, your ultimate online destination for quality textiles.
          </p>
        </div>
        <div className=''>
          <p className='text-xl font-medium mb-2'>Company</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About US</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className=''>
          <p className='text-xl font-medium mb-2'>FOLLOW US ON</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='cursor-pointer'>
              <i className="ri-facebook-fill cursor-pointer" style={{ marginRight: '8px' }}></i>
              ShirazFabrics
            </li>
            <li className='cursor-pointer'>
              <i className="ri-twitter-fill cursor-pointer" style={{ marginRight: '8px' }}></i>
              @Shiraz_Fabric
            </li>
            <li className='cursor-pointer'>
              <i className="ri-instagram-line cursor-pointer" style={{ marginRight: '8px' }}></i>
              @Shiraz_fabric
            </li>
            <li className='cursor-pointer'>
              <i className="ri-global-line cursor-pointer" style={{ marginRight: '8px' }}></i>
              <a href="http://www.ShirazFabric.com" target="_blank" rel="noopener noreferrer">
                www.ShirazFabric.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-2'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
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
