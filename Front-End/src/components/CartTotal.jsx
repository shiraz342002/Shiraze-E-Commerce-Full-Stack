import React, { useContext } from 'react'
import { StoreContext } from '../Store/StoreContext'
import Title from './Title'

const CartTotal = () => {
    const {currency,delivery_fee,getCartTotalAmount}= useContext(StoreContext)
  return (
    <div className='w-full'>
      <div className='text-2xl sm:text-3xl '>
        <Title heading1={"CART"} heading2={"TOTALS"}/>
      </div>
         <div className='flex flex-col gap-3 mt-2 text-sm'>
         <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency} {getCartTotalAmount()}.00</p>
         </div>
         <hr />
         <div className='flex justify-between'>
            <p>Shipping Fee</p>
            <p>{currency} {delivery_fee}.00</p>
         </div>
         <hr />
         <div className='flex justify-between'>
            <p className='font-bold'>Total</p>
            <p>{currency} {getCartTotalAmount() === 0 ? 0: getCartTotalAmount()+delivery_fee}.00</p>
         </div>
         </div>
    </div>
  )
}

export default CartTotal
