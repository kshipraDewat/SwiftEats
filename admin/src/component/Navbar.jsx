import React from 'react'
import { assets } from '../assets/assets'
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-3 px-10 border-b shadow'>
      <img className=' h-6 md:h-12' src={assets.logo} alt=""  />
      <FaUserCircle className='size-8 ' />
    </div>
  )
}

export default Navbar
