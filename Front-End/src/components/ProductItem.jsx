import React, { useContext } from 'react'
import { StoreContext } from '../Store/StoreData'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(StoreContext)
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
    <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='font-medium text-sm'>{currency} {price}</p>
    </div>
    </Link>
  )
}

export default ProductItem