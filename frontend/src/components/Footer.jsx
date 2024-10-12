import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' mt-10 bg-black text-white p-10 md:p-20  flex  flex-col  gap-5  ' id='footer'>
    <div className=" flex flex-col md:flex-row items-center sm:items-start justify-between p-5 gap-10  ">
      <div className="flex flex-col gap-3">
          <img src={assets.logox} alt="" className='h-12 lg:w-80' />
          <p className='md:w-[30vw]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className="flex gap-5 justify-center sm:justify-start ">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
          </div>
      </div>
      <div className=" flex flex-col gap-3 items-center">
          <h2 className='font-bold text-xl'>COMPANY</h2>
          <ul className='flex flex-col items-center sm:items-start gap-2'>
              <li className=' cursor-pointer'>Home</li>
              <li className=' cursor-pointer'>About us</li>
              <li className=' cursor-pointer'>Delivery</li>
              <li className=' cursor-pointer'>Privacy policy</li>
          </ul>
      </div>
      <div className=" flex flex-col gap-3">
          <h2 className='font-bold text-xl'>GET IN TOUCH</h2>
          <ul className='flex flex-col items-center sm:items-start gap-2'>
              <li className=' cursor-pointer'>+1-212-456-7890</li>
              <li className=' cursor-pointer'>contact@swifteats.com</li>
          </ul>
      </div>
    </div>
    <hr className='' />
    <p className="mx-auto">Copyright 2024 © SwiftEats.com - All Right Reserved.</p>
  </div>
  )
}

export default Footer
