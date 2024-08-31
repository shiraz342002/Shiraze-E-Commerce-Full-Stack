import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from "../assets/front-end-assets/assets";
import { StoreContext } from '../Store/StoreContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const PlaceOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });
  const { navigate } = useContext(StoreContext);

  useEffect(() => {
    console.log(paymentMethod);
  }, [paymentMethod]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { firstName, lastName, email, street, city, state, zipcode, country, phone } = formData;
    if (!firstName || !lastName || !email || !street || !city || !state || !zipcode || !country || !phone) {
      toast.error('Please fill in all fields.');
      return false;
    }
    return true;
  };

  const handlePlaceOrder = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post('/api/place-order', {
          ...formData,
          paymentMethod,
        });
        toast.success(response.data.message);
        setTimeout(() => {
          navigate('/orders');
        }, 1500); 
      } catch (error) {
        toast.error('Something went wrong. Please try again.');
        console.error('Error placing order:', error);
      }
    }
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        {/* Left side */}
        <div className='text-xl sm:text-2xl my-3'>
          <Title heading1={"DELIVERY"} heading2={"INFORMATION"} />
        </div>
        <div className='flex gap-3'>
          <input
            className='border border-gray-200 rounded py-1.5 px-3.5 w-full'
            type="text"
            name="firstName"
            placeholder='First name'
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <input
            className='border border-gray-200 rounded py-1.5 px-3.5 w-full'
            type="text"
            name="lastName"
            placeholder='Last name'
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <input
          className='border border-gray-200 rounded py-1.5 px-3.5 w-full'
          type="email"
          name="email"
          placeholder='Email address'
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          className='border border-gray-200 rounded py-1.5 px-3.5 w-full'
          type="text"
          name="street"
          placeholder='Street'
          value={formData.street}
          onChange={handleInputChange}
        />
        <div className='flex gap-3'>
          <input
            className='border border-gray-200 rounded py-1.5 px-3.5 w-full'
            type="text"
            name="city"
            placeholder='City'
            value={formData.city}
            onChange={handleInputChange}
          />
          <input
            className='border border-gray-200 rounded py-1.5 px-3.5 w-full'
            type="text"
            name="state"
            placeholder='State'
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex gap-3'>
          <input
            className='border border-gray-200 rounded py-1.5 px-3.5 w-full'
            type="number"
            name="zipcode"
            placeholder='Zipcode'
            value={formData.zipcode}
            onChange={handleInputChange}
          />
          <input
            className='border border-gray-200 rounded py-1.5 px-3.5 w-full'
            type="text"
            name="country"
            placeholder='Country'
            value={formData.country}
            onChange={handleInputChange}
          />
        </div>
        <input
          className='border border-gray-200 rounded py-1.5 px-3.5 w-full'
          type="number"
          name="phone"
          placeholder='Phone'
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>

      {/* Right Side */}
      <div className='mt-6'>
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title heading1={"PAYMENT"} heading2={"METHOD"} />
          <div className='flex flex-col sm:flex-row gap-4'>
            <div onClick={() => setPaymentMethod('stripe')} className='flex flex-col lg:flex-row gap-4'>
              <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'stripe' ? 'bg-green-400' : ''}`}></p>
                <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
              </div>
            </div>
            <div onClick={() => setPaymentMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setPaymentMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='mt-10 text-end w-full'>
            <button onClick={handlePlaceOrder} className='border py-3 px-16 bg-black text-white'>PLACE ORDER</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PlaceOrder;
