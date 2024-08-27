import React from 'react'

const Subscription = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div className=''>
          <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
          <p className='text-gray-400 mt-4'>Get 20% off your next purchase by subscribing to our newsletter! Stay updated with our latest products, special offers, and exclusive promotions.</p>
          <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-4' action="">
            <input className='w-full sm:flex-1 outline-none' required placeholder='Enter your Email' type="email" />
            <button className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Subscription
