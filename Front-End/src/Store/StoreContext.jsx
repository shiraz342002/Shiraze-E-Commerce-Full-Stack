import { createContext, useEffect, useState } from "react";
import { products } from "../assets/front-end-assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"
export const StoreContext = createContext()

const StoreContextProvider=(props)=>{
    const currency="$"
    const delivery_fee=10
    const [search,setSearch]=useState('')
    const [showSearch,setShowSearch]=useState(false)
    const [cartItems,setCartItems]=useState({})
    const navigate = useNavigate()



    const addToCart =async (itemId,size) =>{
        if(!size){
            toast.error('Select Product Size')
            return
        }

        let cartData=  structuredClone(cartItems)
        if(cartData[itemId]){ //if item already exists 
            if(cartData[itemId][size]){ //if size exsists 
                cartData[itemId][size]+=1
            }else{
                cartData[itemId][size]=1
            }
        }else{
            cartData[itemId]={}     // creates new item 
            cartData[itemId][size]=1 // creates creates new item size
        }
        setCartItems(cartData)
    }

    // calc total num of items in cart 
    // to increment cart icon in navbar page
    const getCartCount=()=>{
        var total_count=0
        for (const items in cartItems) { // loop each item in cartitems
           for(const item in cartItems[items]){ // loop each size in cartitems
                try{
                    if(cartItems[items][item]>0){
                        total_count+=cartItems[items][item] //add quanitity of current size in toal_count
                    }
                }catch(err){

                }
           }
        }
        return total_count
    }

    // For Debugging
    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])

    const updateQuantity= async(itemId,size,quanitity)=>{
        let cartData=structuredClone(cartItems)
        cartData[itemId][size]=quanitity;
        setCartItems(cartData);
    }

    const getCartTotalAmount=()=>{
        let total_amount=0;
        for(const items in cartItems){
            let iteminfo=products.find((Product)=>Product._id===items);
            for(const item in cartItems[items]){
                if(cartItems[items][item]>0){
                    total_amount+=iteminfo.price * cartItems[items][item]
                }
            }
        }
        return total_amount
    }


    const value ={
        navigate,
        getCartTotalAmount,
        getCartCount,
        updateQuantity,
        cartItems,
        addToCart,
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
    }
        return(
            <StoreContext.Provider value={value}>
                {props.children}
            </StoreContext.Provider>
        )
    }
export default StoreContextProvider 
