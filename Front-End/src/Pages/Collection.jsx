import React, { useContext, useState } from 'react';
import { StoreContext } from '../Store/StoreData';
import { assets } from '../assets/assets';

function Collection() {
  const { products } = useContext(StoreContext);
  const [showfilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className="min-w-[240px]"> 
        <p
          className='w-1/2 my-2 text-xl flex justify-start items-center cursor-pointer'
       onClick={()=>setShowFilter(!showfilter)} > FILTERS <img className={`h-3 ml-1 sm:hidden ${showfilter? 'rotate-90': ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden sm:block'}`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className='flex flex-col gap-3 text-sm  text-gray-700'>
            <p>
              <input className='w-3 mr-2' type="checkbox" value={'Men'} /> Men
            </p>
            <p>
              <input className='w-3 mr-2' type="checkbox" value={'Women'} /> Women
            </p>
            <p>
              <input className='w-3 mr-2' type="checkbox" value={'Kids'} /> Kids
            </p>
          </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? '' : 'hidden sm:block'}`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className='flex flex-col gap-3 text-sm  text-gray-700'>
            <p>
              <input className='w-3 mr-2' type="checkbox" value={'Topwear'} /> Topwear
            </p>
            <p>
              <input className='w-3 mr-2' type="checkbox" value={'Bottomwear'} /> Bottomwear
            </p>
            <p>
              <input className='w-3 mr-2' type="checkbox" value={'Winterwear'} /> Winterwear
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
