import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../Store/StoreContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProdcuts = ({category,subCategory}) => {
    const {products} = useContext(StoreContext)
    const [related,setRelated]= useState([])

    useEffect(()=>{
        if(products.length>0){
            const filteredProducts = products
            .filter(item => item.category === category)
            .filter(item => item.subCategory === subCategory);
            setRelated(filteredProducts.slice(0, 5));
        }
        
    },[products])

    // useEffect(() => {
    //     console.log(related);
    // }, [related]);
  return (
    <div className='my-24'>
    <div className='text-center text-3xl py-2'>
      <Title heading1={"RELATED"} heading2={"PRODUCTS"}/>
    </div>
    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {related.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))}
    </div>
    </div>
  )
}

export default RelatedProdcuts
