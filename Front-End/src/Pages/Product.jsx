import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../Store/StoreContext'
import { assets } from '../assets/assets';
import RelatedProdcuts from '../components/RelatedProdcuts';

const Product = () => {
  const { productId } = useParams();
  const { products,addToCart } = useContext(StoreContext);
  const [productData, setProductData] = useState(false);
  const [image, setimage] = useState('')
  const { currency } = useContext(StoreContext)
  const [size,setSize]=useState('')
  
  const getProductData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setimage(item.image[0])
        return null;
      }
    })

  }
  useEffect(() => {
    getProductData()
  }, [products, productId])

  const setMainImage = (item) => {
    setimage(item)
  }

  //For Debugging
  // useEffect(()=>{
  //   console.log(size);
  // },[size])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex flex-1 flex-col-reverse gap-3 sm:flex-row'>
          {/* Side images */}
          <div className='flex sm:flex-col overflow-x-auto  justify-between sm:justify-normal sm:w-[18.7%] w-full '>
            {
              productData.image.map((item, index) => (
                <img onClick={(e) => setMainImage(item)} src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          {/* Main Image */}
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/* product info */}
        {/* name */}
        <div className='flex-1'>
          <h1 className='font-medium mt-3 text-2xl'>{productData.name}</h1>
          {/* Dynamic rating */}
          <div className='flex items-center mt-2 gap-1'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2 text-1xl mt-1'>{'(69)'}</p>
          </div>
          <p className='font-bold mt-2 text-2xl'>{currency} {productData.price}</p>
          <p className='text-gray-500 mt-3 w-4/5 md:4/5'>{productData.description}</p>
          <div className='flex flex-col gap-3 my-7'> 
            <p className='font-bold text-1xl'>Select Size</p>
              <div className="flex gap-2">
                {
                  productData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-grey-100 ${item===size ? 'border-red-500': ''} `} key={index}>{item}</button>
                  ))}
              </div>
          </div>
         <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white py-3 px-5 text-1xl active:bg-gray-800 '>ADD TO CART</button>
         <hr className='mt-9 sm:w-4/5' />
         <div className='mt-8 text-gray-600 text-1xl flex flex-col '>
          <p>100% Original product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
         </div>
        </div>
      </div>
      {/* Description & review */}
      <div className='mt-20'>
          <div className='flex'>
                  <b className="border px-5 py-3 text-sm">Description</b>
                  <b className="border px-5 py-3 text-sm">Reviews (69)</b>
          </div>
          <div className='flex flex-col border py-5 px-8 gap-3 text-sm'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur, similique qui illum quisquam suscipit. Et ea eius officia nulla in porro sit minus suscipit illum minima rerum possimus vitae libero nisi quis excepturi voluptates, atque labore, earum deleniti exercitationem nam. Illum, possimus modi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor veritatis tempora voluptatum odio, provident distinctio possimus molestiae quae. Sint facilis voluptatem nesciunt, sed quasi beatae quos perspiciatis sapiente veritatis.</p>
          </div>
      </div>
      <div className=''>
            {/* Related products */}
          <RelatedProdcuts category={productData.category} subCategory={productData.subCategory}/>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
