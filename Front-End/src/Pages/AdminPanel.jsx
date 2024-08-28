import React, { useState } from "react";
import { assets } from "../assets/front-end-assets/assets";
import { assets2 } from "../assets/admin_assets/assets";
const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('');
  const handleImageClick = (event) => {
    const targetId = event.currentTarget.getAttribute('htmlFor');
    document.getElementById(targetId).click();
  };
  const handleNavClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <img
          className="w-24 cursor-pointer transition-transform transform hover:scale-105"
          src={assets.shiraz_logo}
          alt="Logo"
        />
        <button className="bg-black text-white py-1 px-4 rounded-md shadow-sm hover:bg-gray-700 transition-colors duration-200">
          Logout
        </button>
      </header>
      <hr className="border-gray-300" />
      <div className="flex flex-1">
        <aside className="w-[18%] bg-white border-r border-gray-200 shadow-sm">
          <nav className="flex flex-col p-4 space-y-2 gap-4 pt-6 pl-[20%] text-[15px]">
            <a
              className={`flex items-center gap-3 p-2 rounded-md ${activeSection === 'add' ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} transition-colors duration-150`}
              href="#"
              onClick={() => handleNavClick('add')}
            >
              <img
                className="w-5 h-5"
                src={assets2.add_icon}
                alt="Add Items"
              />
              <span className="hidden md:block">Add Items</span>
            </a>
            <a
              className={`flex items-center gap-3 p-2 rounded-md ${activeSection === 'list' ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} transition-colors duration-150`}
              href="/list"
              onClick={() => handleNavClick('list')}
            >
              <img
                className="w-5 h-5"
                src={assets2.order_icon}
                alt="List Items"
              />
              <span className="hidden md:block">List Items</span>
            </a>
            <a
              className={`flex items-center gap-3 p-2 rounded-md ${activeSection === 'orders' ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} transition-colors duration-150`}
              href="/orders"
              onClick={() => handleNavClick('orders')}
            >
              <img
                className="w-5 h-5"
                src={assets2.order_icon}
                alt="Orders"
              />
              <span className="hidden md:block">Orders</span>
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-gray-50">
        <div className="">
        </div>
          {activeSection === 'add' && (
            <form className="flex flex-col w-full items-start">
              <div className="mb-4">
                <p className="text-base ">Upload Image</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <div className="flex gap-2">
                  <label htmlFor="image1">
                    <img
                      className="w-20 cursor-pointer"
                      src={assets2.upload_area}
                      alt="Upload"
                      onClick={handleImageClick}
                    />
                  </label>
                  <input type="file" hidden id="image1" />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="image2">
                    <img
                      className="w-20 cursor-pointer"
                      src={assets2.upload_area}
                      alt="Upload"
                      onClick={handleImageClick}
                    />
                  </label>
                  <input type="file" hidden id="image2" />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="image3">
                    <img
                      className="w-20 cursor-pointer"
                      src={assets2.upload_area}
                      alt="Upload"
                      onClick={handleImageClick}
                    />
                  </label>
                  <input type="file" hidden id="image3" />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="image4">
                    <img
                      className="w-20 cursor-pointer"
                      src={assets2.upload_area}
                      alt="Upload"
                      onClick={handleImageClick}
                    />
                  </label>
                  <input type="file" hidden id="image4" />
                </div>
              </div>
              <div className="w-full">
              <p className="mt-4">Prodct Name</p>
              <input class="w-full max-w-[500px] mt-4 px-3 py-2 border border-gray-300" type="text" placeholder="Type here" />

              </div>
              <div className="w-full">
              <p className="mt-4">Prodct Description</p>
              <textarea class="w-full max-w-[500px] mt-4 px-3 py-2 border border-gray-300" type="textarea" placeholder="Type here" />
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-8 w-full sm:gap-8 ">
               <div>
                <p className="mb-4">Product Category</p>
                <select className="px-2 w-full py-2" >
                  <option  value="Men">Men</option>
                  <option  value="Women">Women</option>
                  <option  value="Kids">Kids</option>
                </select>
               </div>
               <div>
                <p className="mb-4">Sub Category</p>
                <select className="px-3 w-full py-2" >
                  <option  value="Topwear">Topwear</option>
                  <option  value="Bottomwear">Bottomwear</option>
                  <option  value="Winterwear">Winterwear</option>
                </select>
                
               </div>
               <div>
                <p className="mb-4">Product Price</p>
                <input className="py-2 px-4 w-full sm:w-[120px]" type="number" placeholder="30" />
               </div>
              </div>
               <div>
                <p className=" mt-5">Product Sizes</p>
                <div className="flex gap-3 mt-3">
                  <div>
                    <p className="border bg-slate-200 py-1 px-3">S</p>
                  </div>
                  <div>
                    <p className="border bg-slate-200 py-1 px-3">M</p>
                  </div>
                  <div>
                    <p className="border bg-slate-200 py-1 px-3">L</p>
                  </div>
                  <div>
                    <p className="border bg-slate-200 py-1 px-3">XL</p>
                  </div>
                  <div>
                    <p className="border bg-slate-200 py-1 px-3">XLL</p>
                  </div>
                </div>
                <div className="mt-5">
                  <input type="checkbox" id="bestseller"/>
                  <label className="px-4" htmlFor="bestseller">Add to Best Seller</label>
                </div>
                <button className=" w-28 mt-5 text-white bg-black py-4 px-10">ADD</button>
               </div>
              
            </form>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
