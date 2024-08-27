import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
const Contact = () => {
  return (
    <div>
       <div className='text-center border-t pt-8'>
        <div className='mb-3 text-2xl inline-flex item-center gap-2 font-medium'>
            <Title heading1={"CONTACT"} heading2={"US"}/>
        </div>
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-10 mb-28">
            <div>
                <img className='ml-4 w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
            </div>
            <div className='flex flex-col gap-5 justify-center items-start'>
              <p className='font-bold text-2xl'>Our Store</p>
                <p>54709 Willms StationSuite 350, Washington, USA</p>
                <p>Tel: (415) 555-0132

                </p>
            </div>
        </div>
    </div>
  )
}

export default Contact
