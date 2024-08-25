import React, { useContext, useState, useEffect } from 'react'
import { StoreContext } from '../Store/StoreContext.jsx'
import Title from "../components/Title.jsx"
import { assets } from '../assets/assets.js'
const Cart = () => {
    const { products, cartItems, currency, delivery_fee,updateQuantity } = useContext(StoreContext)
    const [cartData, setCartData] = useState([]);
    // console.log(cartItems);
    const tempData = [];
    for (const items in cartItems) {
        for (const item in cartItems[items]) {
            if (cartItems[items][item] > 0) {
                tempData.push({
                    _id: items,
                    size: item,
                    quantity: cartItems[items][item]
                })
            }
        }
    }
    useEffect(() => {
        setCartData(tempData);
    }, [cartItems])


    return (
        <div className='border-t pt-14'>
            <div className='text-2xl ml-8 mb-3'>
                <Title heading1={"YOUR"} heading2={"CART"} />
            </div>
            <div>
                {
                    cartData.map((item,index)=>{
                      const productData =products.find((product)=>product._id===item._id); 
                      return(
                        <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                            <div className='flex items-start gap-6'>
                                <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                            <div>
                                <p className='text-1xl sm:text-lg font-medium '>{productData.name}</p>
                                <div className='flex items-center mt-2 gap-5 md:text-1xl'>
                                    <p>{currency} {productData.price}</p>
                                    <p className='border px-2 sm:px-3 sm:py-2 py-2 bg-slate-50'>{item.size}</p>
                                </div>
                            </div>
                            </div>
                            <input className='border max-w-10 sm:max-w-20 sm:px-2 px-1 py-1 text-center' type="number" defaultValue={item.quantity} min={item.quantity}/>
                            <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 sm:w-5 mr-5 cursor-pointer' src={assets.bin_icon} alt="" />
                        </div>

                      )
                    })
                }
            </div>

        </div> 
    )
}

export default Cart
