import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../Store/StoreContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(StoreContext);
    const [visible,setVisible]=useState(false) // for displaying searchbar only on collection
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true)
        }else{
            setVisible(false)
        }
        
    },[location])
    return showSearch && visible ? (
        <div className='border-t border-b bg-gray-100'>
            <div className='flex items-center justify-center py-5'>
                <div className='flex items-center border border-gray-400 rounded-full w-3/4 sm:w-1/2 px-4 py-2 bg-white'>
                    <input 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                        className='flex-grow outline-none bg-transparent text-sm' 
                        type="text" 
                        placeholder='Search' 
                    />
                    <img className='w-4 ml-2' src={assets.search_icon} alt="Search icon" />
                </div>
                <img 
                    onClick={() => setShowSearch(false)} 
                    className='w-4 ml-4 cursor-pointer' 
                    src={assets.cross_icon} 
                    alt="Close search" 
                />
            </div>
        </div>
    ) : null;
}

export default SearchBar;
