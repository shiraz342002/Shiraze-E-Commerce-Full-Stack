import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const StoreContext = createContext()

const StoreContextProvider=(props)=>{
    const currency="$"
    const delivery_fee=10
    const [search,setSearch]=useState('')
    const [showSearch,setShowSearch]=useState(true)

    const value ={
        products,
        currency,
        delivery_fee,
    }
        return(
            <StoreContext.Provider value={value}>
                {props.children}
            </StoreContext.Provider>
        )
    }
export default StoreContextProvider 
