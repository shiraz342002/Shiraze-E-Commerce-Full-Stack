import React, { useState } from "react";
import { assets } from "../assets/assets";

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
        <aside className="w-64 bg-white border-r border-gray-200 shadow-sm">
          <nav className="flex flex-col p-4 space-y-2">
            <a
              className={`flex items-center gap-3 p-2 rounded-md ${activeSection === 'add' ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} transition-colors duration-150`}
              href="#"
              onClick={() => handleNavClick('add')}
            >
              <img
                className="w-5 h-5"
                src={assets.support_img}
                alt="Add Items"
              />
              <span>Add Items</span>
            </a>
            <a
              className={`flex items-center gap-3 p-2 rounded-md ${activeSection === 'list' ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} transition-colors duration-150`}
              href="/list"
              onClick={() => handleNavClick('list')}
            >
              <img
                className="w-5 h-5"
                src={assets.support_img}
                alt="List Items"
              />
              <span>List Items</span>
            </a>
            <a
              className={`flex items-center gap-3 p-2 rounded-md ${activeSection === 'orders' ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} transition-colors duration-150`}
              href="/orders"
              onClick={() => handleNavClick('orders')}
            >
              <img
                className="w-5 h-5"
                src={assets.support_img}
                alt="Orders"
              />
              <span>Orders</span>
            </a>
          </nav>
        </aside>
        
        {/* Main Section */}
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
                      className="w-6 cursor-pointer"
                      src={assets.support_img}
                      alt="Upload"
                      onClick={handleImageClick}
                    />
                  </label>
                  <input type="file" hidden id="image1" />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="image2">
                    <img
                      className="w-6 cursor-pointer"
                      src={assets.support_img}
                      alt="Upload"
                      onClick={handleImageClick}
                    />
                  </label>
                  <input type="file" hidden id="image2" />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="image3">
                    <img
                      className="w-6 cursor-pointer"
                      src={assets.support_img}
                      alt="Upload"
                      onClick={handleImageClick}
                    />
                  </label>
                  <input type="file" hidden id="image3" />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="image4">
                    <img
                      className="w-6 cursor-pointer"
                      src={assets.support_img}
                      alt="Upload"
                      onClick={handleImageClick}
                    />
                  </label>
                  <input type="file" hidden id="image4" />
                </div>
              </div>
              <div className="w-full">
              <p className="mt-4">Prodct Name</p>
              <input class="w-full max-w-[500px] mt-4 px-3 py-2" type="text" placeholder="Type here" />
              </div>
            </form>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
