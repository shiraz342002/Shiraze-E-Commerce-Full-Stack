import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div>
   <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
    <div >
        <img src={assets.shiraz_logo} className='mb-5 w-32' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>
        Discover a world of premium fabrics at Shiraz-Fabrics, your ultimate online destination for quality textiles. We offer a curated selection of luxurious fabrics, from elegant silks and rich velvets to durable cottons and contemporary blends.
        </p>
    </div>
    <div>
        <p className='text-xl font-medium mb-5'>Company</p>
        <ul className='flex flex-col gap-1 text-grat-600'>
            <li>Home</li>
            <li>About US</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
  </div>
 </div>
  )
}

export default Footer
