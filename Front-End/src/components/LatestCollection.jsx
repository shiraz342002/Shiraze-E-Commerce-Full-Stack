import React, { useContext } from 'react'
import { StoreContext } from '../Store/StoreData'

function LatestCollection() {
    const {products,currencyy} = useContext(StoreContext)
    console.log(products);
    console.log(currencyy);
    
  return (
    <div>
      
    </div>
  )
}

export default LatestCollection
