import React, { useState, useRef, useContext } from "react";
import { assets } from "../assets/front-end-assets/assets";
import { assets2 } from "../assets/admin_assets/assets";
import { toast } from 'react-toastify';
// import { products } from "../assets/front-end-assets/assets";
import { StoreContext } from "../Store/StoreContext";

const AdminPanel = () => {
  const {products,setProducts,fetchProducts} =useContext(StoreContext)
  const [activeSection, setActiveSection] = useState('');
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    productCategory: 'Men',
    subCategory: 'Topwear',
    productPrice: '',
    productSizes: [],
    bestseller: false,
    image: []
  });

  const fileInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSizeClick = (size) => {
    setFormData(prevData => ({
      ...prevData,
      productSizes: prevData.productSizes.includes(size)
        ? prevData.productSizes.filter(s => s !== size)
        : [...prevData.productSizes, size]
    }));
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.productName || !formData.productDescription || !formData.productPrice) {
      toast.error("Please fill out all required fields");
      return;
    }


    let responseData;
    const imageFormData = new FormData();
    imageFormData.append('image', image);

    try {
      const uploadResponse = await fetch('http://localhost:3000/upload', {
        method: "POST",
        body: imageFormData,
      });
      responseData = await uploadResponse.json();

      if (responseData.success) {
        formData.image = responseData.image_url;
      } else {
        toast.error("Image upload failed");
        return;
      }
    } catch (error) {
      toast.error("An error occurred while uploading the image.");
      console.error("Error uploading image:", error);
      return;
    }


    const newProduct = {
      name: formData.productName,
      description: formData.productDescription,
      price: parseFloat(formData.productPrice),
      image: formData.image,
      category: formData.productCategory,
      subCategory: formData.subCategory,
      sizes: formData.productSizes,
      date: new Date(),
      bestseller: formData.bestseller
    };

    try {
      const response = await fetch('http://localhost:3000/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      console.log(response);
      
      if (response.ok) {
        toast.success("Product added successfully!");
        fetchProducts();
        setFormData({
          productName: '',
          productDescription: '',
          productCategory: 'Men',
          subCategory: 'Topwear',
          productPrice: '',
          productSizes: [],
          bestseller: false,
          image: []
        });
        setImage(null);
      } else {
        const error = await response.json();
        toast.error("Failed to add product: " + error.message);
      }
    } catch (error) {
      toast.error("An error occurred while adding the product.");
      console.error("Error adding product:", error);
    }
  };
  const handleDelete = async (productId) => {
    console.log("Product to be deleted "+productId);
    
    try {
      const response = await fetch(`http://localhost:3000/products/delete/${productId}`, {
        method: 'DELETE',
      });
      console.log(response);
      
      if (response.ok) {
        toast.success("Product deleted successfully!");
        fetchProducts();
      } else {
        const error = await response.json();
        toast.error("Failed to delete the product: " + error.message);
      }
    } catch (error) {
      toast.error("An error occurred while deleting the product.");
      console.error('An error occurred while deleting the product:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="flex items-center justify-between p-4 bg-gray-800 shadow-lg">
        <div className="flex items-center space-x-4">
          <img
            className="w-24 cursor-pointer transition-transform transform hover:scale-105"
            src={assets.shiraz_logo}
            alt="Logo"
          />
          <h1 className="text-white text-2xl font-semibold tracking-wide transition-all duration-300 transform hover:scale-110 hover:text-gray-300">
            Admin Panel
          </h1>
        </div>
        <button className="bg-red-600 text-white py-1 px-4 rounded-md shadow-sm hover:bg-red-700 transition-colors duration-200">
          Logout
        </button>
      </header>
      <hr className="border-gray-300" />
      <div className="flex flex-1 bg-white">
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
              href="#"
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
              href="#"
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
        <main className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base bg-white">
          {activeSection === 'add' && (
            <form className="flex flex-col w-full items-start" onSubmit={handleSubmit}>
              <div className="mb-4">
                <p className="text-base">Upload Image</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <label htmlFor="upload_image">
                  <img className="w-20" src={image ? URL.createObjectURL(image) : assets2.upload_area} alt="" />
                </label>
                <input type="file" name="image" id="upload_image" hidden onChange={imageHandler} />
              </div>
              <div className="w-full">
                <p className="mt-4">Product Name</p>
                <input
                  className="w-full max-w-[500px] mt-4 px-3 py-2 border border-gray-300"
                  type="text"
                  name="productName"
                  placeholder="Type here"
                  value={formData.productName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <p className="mt-4">Product Description</p>
                <textarea
                  className="w-full max-w-[500px] mt-4 px-3 py-2 border border-gray-300"
                  name="productDescription"
                  placeholder="Write content here"
                  value={formData.productDescription}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-8 w-full sm:gap-8">
                <div>
                  <p className="mb-4">Product Category</p>
                  <select
                    className="px-2 w-full py-2 border-gray-300 border"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                  >
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                  </select>
                </div>
                <div>
                  <p className="mb-4">Sub Category</p>
                  <select
                    className="px-2 w-full py-2 border-gray-300 border"
                    name="subCategory"
                    value={formData.subCategory}
                    onChange={handleChange}
                  >
                    <option value="Topwear">Topwear</option>
                    <option value="Bottomwear">Bottomwear</option>
                    <option value="Winterwear">Winterwear</option>
                  </select>
                </div>
              </div>
              <div className="mt-8 w-full">
                <p className="mb-4">Product Price</p>
                <input
                  className="w-full max-w-[500px] mt-4 px-3 py-2 border border-gray-300"
                  type="number"
                  name="productPrice"
                  placeholder="Enter price"
                  value={formData.productPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-8 flex flex-col w-full">
                <p>Select Size</p>
                <div className="flex gap-4 mt-4">
                  {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button
                      key={size}
                      type="button"
                      className={`px-4 py-2 border border-gray-300 ${formData.productSizes.includes(size) ? 'bg-gray-200' : ''}`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex gap-2">
                <label>
                  <input
                    type="checkbox"
                    name="bestseller"
                    checked={formData.bestseller}
                    onChange={handleChange}
                  />
                  Bestseller
                </label>
              </div>
              <button className="mt-8 bg-blue-500 text-white px-4 py-2 rounded" type="submit">
                Submit
              </button>
            </form>
          )}
          {activeSection === 'list' && (
            <>
              <p className="text-2xl font-bold">All Products List</p>
              <div className="flex flex-col">
                <div className="hidden mb-3 md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] border bg-gray-100 text-sm py-1 px-3 mt-2 ">
                  <b>Image</b>
                  <b>Name</b>
                  <b>Category</b>
                  <b>Price</b>
                  <b>Action</b>
                </div>
                {products.map((item, index) => (
                  <div
                    key={index}
                    className="grid my-1 grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
                  >
                    <img className="w-12 object-cover" src={item.image[0]} alt={item.name} />
                    <p className="truncate">{item.name}</p>
                    <p className="hidden sm:block truncate">{item.category}</p>
                    <p className="hidden sm:block">{item.price}</p>
                    <img onClick={() => handleDelete(item._id)} className="w-3 cursor-pointer" src={assets.cross_icon} alt="Delete" />
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
