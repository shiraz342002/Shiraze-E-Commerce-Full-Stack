import React, { useContext } from 'react'
import { StoreContext } from '../Store/StoreContext'
import Title from '../components/Title'

const Order = () => {
  const {currency,products}= useContext(StoreContext)
  return (
      <div className="border-t  pt-16">
        <div className="mt-10 text-2xl">
            <Title heading1={"MY"} heading2={"ORDERS"}/>
        </div>

        <div>
          {
            products.slice(0,4)
          }
        </div>
      </div>
  )
}

export default Order
