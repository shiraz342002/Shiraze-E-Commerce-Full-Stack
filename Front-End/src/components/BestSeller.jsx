import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { StoreContext } from '../Store/StoreData'
import ProductItem from './ProductItem'
const BestSeller = () => {
    const {products}=useContext(StoreContext)
    const[bestSeller,setBestSeller]=useState([])
    useEffect(() => {
        if (products.length>0) {
            const filteredBestSellers = products.filter(product => product.bestseller === true);
            setBestSeller(filteredBestSellers.slice(0, 5));
            console.log(filteredBestSellers);
        }
    }, []);
  return (
    <div className='my-10'>
      <div className="text-center py-8 text-3xl">
      <Title heading1={"BEST"} heading2={"SELLERS"}/>
      <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base'>Check out our Best Sellers collection Here are all our items that beloved by our customers and trust </p>
      </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
      bestSeller.map((item,index)=>(
        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
      ))}
        </div>
    </div>
  
  )
}

export default BestSeller
