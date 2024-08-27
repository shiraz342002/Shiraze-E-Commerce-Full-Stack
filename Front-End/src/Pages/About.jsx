import React from 'react'
import Title from "../components/Title"
import {assets} from "../assets/assets"
import Subscription from '../components/Subscription'
const About = () => {
  return (
    <div>
      <div className='text-center border-t pt-8'>
        <div className='mb-3 text-2xl inline-flex item-center gap-2 font-medium'>
            <Title heading1={"ABOUT"} heading2={"US"}/>
        </div>
    </div>
        <div className="my-10 flex flex-col md:flex-row gap-14 ">
            <img className='w-full md:max-w-[420px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700'>
                <p>Shiraz Fabric was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                <b>OUR MISSTION</b>
                <p>Our mission at Shiraz Fabric is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
            </div>
        </div>
        <div className='text-2xl mt-8'>
            <Title heading1={"WHY"} heading2={"CHOOSE US"}/>
        </div>
        <div className="flex flex-col md:flex-row mt-8 ">
            <div className='border py-9 px-10 md:px-16 sm:py-20 gap-5 flex flex-col'>
                <b>Quality Assurance:</b>
                <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
            </div>
            <div className='border py-9 px-10 md:px-16 sm:py-20 gap-5 flex flex-col'>
                <b>Convenience:</b>
                <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
            </div>
            <div className='border py-9 px-10 md:px-16 sm:py-20 gap-5 flex flex-col'>
                <b>Exceptional Customer Service:</b>
                <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
            </div>
        </div>
        <div>
        <Subscription/>
        </div>
    </div>
  )
}

export default About
