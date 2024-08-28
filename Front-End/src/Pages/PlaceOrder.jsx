import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from "../assets/front-end-assets/assets";
import { StoreContext } from '../Store/StoreContext'

const PlaceOrder = () => {
  const [paymentMethod,setPaymentMethod]=useState('cod')
  const  {navigate}=useContext(StoreContext)
    useEffect(()=>{
    console.log(paymentMethod);
  },[paymentMethod])
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
    <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        {/* //left side  */}
        <div className='text-xl sm:text-2xl my-3'>
          <Title heading1={"DELIVERY"}  heading2={"INFORMATION"}/>
        </div>
        <div className='flex gap-3'>
            <input className='border border-gray-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
            <input className='border border-gray-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
        </div>
            <input className='border border-gray-200 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
            <input className='border border-gray-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
          <div className='flex gap-3'>
            <input className='border border-gray-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
            <input className='border border-gray-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
          <div className='flex gap-3'>
            <input className='border border-gray-200 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
            <input className='border border-gray-200 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
            <input className='border border-gray-200 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
    </div>

    {/* //Right Side */}
    <div className='mt-6'>
      <div className="mt-8 min-w-80"> 
        <CartTotal/>
      </div>
      <div className="mt-12">
        <Title heading1={"PAYMENT"} heading2={"METHOD"}/>
        <div className='flex flex-col sm:flex-row gap-4'>
        <div onClick={()=>setPaymentMethod('stripe')} className='flex flex-col lg:flex-row gap-4'>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod ==='stripe'? 'bg-green-400':''}`}></p>
                <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            </div>
            <div onClick={()=>setPaymentMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'razorpay'? 'bg-green-400':''}`}></p>
                <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>  
            <div onClick={()=>setPaymentMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'cod'? 'bg-green-400':''}`}></p>
                <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
        </div>
      </div>
        <div className='mt-10 text-end w-full'>
          <button onClick={()=>navigate('/orders')} className='border py-3 px-16 bg-black text-white'>PLACE ORDER</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default PlaceOrder
