import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../Store/StoreContext'
import Title from './Title'
import ProductItem from './ProductItem'

function LatestCollection() {
    const {products} = useContext(StoreContext)
    const [displaylatestcollection,setdisplaylatestcollection]=useState([])
    useEffect(()=>{
      if(products.length>=10){
       setdisplaylatestcollection(products.slice(0,10))
       console.log(products);
       
      }
    },[products])

  return (
    <div className='my-10'>
      <div className="text-center py-8 text-3xl">
      <Title heading1={"LATEST"} heading2={"COLLECTION"}/>
      <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base'>Check out our latest collection from the pure fabric and hands of our professionals </p>
      </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
      displaylatestcollection.map((item,index)=>(
        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
      ))}
        </div>
    </div>
  )
}

export default LatestCollection
