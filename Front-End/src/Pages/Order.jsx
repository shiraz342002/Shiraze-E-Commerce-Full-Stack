import React, { useContext } from 'react'
import { StoreContext } from '../Store/StoreContext'
import Title from '../components/Title'

const Order = () => {
  const { currency, products } = useContext(StoreContext)
  return (
    <div className="border-t  pt-16">
      <div className="mt-10 text-2xl">
        <Title heading1={"MY"} heading2={"ORDERS"} />
      </div>

      <div>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className='flex flex-col border-t border-b text-gray-700 py-4 md:flex-row md:items-center justify-between gap-4 '>
              <div className='flex item-start gap-6 text-sm '>
                <img src={item.image[0]} className='w-20' />
                <div>
                  <p className='sm:text-base font-medium '>{item.name}</p>
                  <div className='flex flex-row gap-3 font-medium text-base text-gray-700 mt-1'>
                    <p>{currency} {item.price}</p>
                    <p>Quanity: 1</p>
                    <p>Size: L</p>
                  </div>
                  <p className='mt-1'>Date: <span className='text-gray-400'>25 July 2024</span></p>
                  <p className='mt-1'>Payment: <span className='text-gray-400'>COD</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className="flex items-center gap-2">
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Order Placed</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Order
