import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../Store/StoreData";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

function Collection() {
  const { products } = useContext(StoreContext);
  const [showfilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProdcuts] = useState([]);
  const [category, setCategory] = useState([]);
  const [advanceCategory, setAdvanceCategory] = useState([]);

  const toggleAdvanceCategory = (e) => {
    if (advanceCategory.includes(e.target.value)) {
      setAdvanceCategory(prev=>prev.filter(item=>item!==e.target.value));
    } else {
      setAdvanceCategory(prev=>[...prev,e.target.value])
    }
  };


  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }

  };

  // useEffect(() => {
  //   console.log(advanceCategory);
  // }, [advanceCategory]);

  // useEffect(() => {
  //   // console.log(category);
  // }, [category]);




  const applyfilter = () => {
    let products_copy = products.slice();
    if (category.length > 0) {
      products_copy = products_copy.filter((item) => category.includes(item.category));
    }    
    if(advanceCategory.length > 0){
      products_copy=products_copy.filter(item=>advanceCategory.includes(item.advanceCategory))
    }    
    setFilterProdcuts(products_copy);
  };

  //With filters
  useEffect(() => {
    applyfilter();
  }, [category, advanceCategory]);

  //without filters
  useEffect(() => {
    setFilterProdcuts(products);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-[240px]">
        <p
          className="w-1/2 my-2 text-xl flex justify-start items-center cursor-pointer"
          onClick={() => setShowFilter(!showfilter)}
        >
          FILTERS
          <img
            className={`h-3 ml-1 sm:hidden transform transition-transform duration-300 ease-out ${showfilter ? "rotate-90" : "rotate-0"}`}
            src={assets.dropdown_icon}
            alt="dropdown icon"
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? "" : "hidden sm:block"}`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-3 text-sm text-gray-700">
            <p>
              <input className="w-3 mr-2" type="checkbox" value={"Men"} onChange={(e) => toggleCategory(e)} /> Men
            </p>
            <p>
              <input className="w-3 mr-2" type="checkbox" value={"Women"} onChange={(e) => toggleCategory(e)} />{" "}
              Women
            </p>
            <p>
              <input className="w-3 mr-2" type="checkbox" value={"Kids"} onChange={(e) => toggleCategory(e)} /> Kids
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? "" : "hidden sm:block"}`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-3 text-sm text-gray-700">
            <p>
              <input className="w-3 mr-2" type="checkbox" value={"Topwear"} onClick={(e)=>toggleAdvanceCategory(e)} />{" "}
              Topwear
            </p>
            <p>
              <input
                className="w-3 mr-2"
                type="checkbox"
                value={"Bottomwear"}
                 onClick={(e)=>toggleAdvanceCategory(e)}
              />{" "}
              Bottomwear
            </p>
            <p>
              <input
                className="w-3 mr-2"
                type="checkbox"
                value={"Winterwear"}
                 onClick={(e)=>toggleAdvanceCategory(e)}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title heading1={"ALL"} heading2={"COLLECTIONS"} />
          <select className="border-2 font-medium border-gray-200 px-2 text-sm" name="" id="">
            <option value="relevent">Sort by : Relevant </option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
