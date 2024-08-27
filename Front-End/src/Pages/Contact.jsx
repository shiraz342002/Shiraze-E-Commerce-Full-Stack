import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
const Contact = () => {
  return (
    <div>
      <div className='text-center border-t pt-8'>
        <div className='mb-3 text-2xl inline-flex item-center gap-2 font-medium'>
          <Title heading1={"CONTACT"} heading2={"US"} />
        </div>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-14  mb-28">
        <div>
          <img className='ml-4 w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        </div>
        <div className='flex flex-col gap-5 justify-center items-start'>
          <p className='font-semibold text-2xl'>Our Store</p>
          <p>54709 Willms StationSuite <br /> 350, Washington, USA</p>
          <p>Tel: (415) 555-0132
            <br />
            Email: admin@forever.com
          </p>
          <p className='font-semibold text-2xl'>Careers at Shiraz Fabrics</p>
          <p>Learn more about our teams and job openings.</p>
          <button className='py-4 px-7 border border-black font-medium text-sm hover:bg-black hover:text-white transition ease-out duration-400 transform hover:scale-105'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
