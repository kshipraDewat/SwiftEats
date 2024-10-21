import React from 'react'
import { assets } from '../assets/assets'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-3 px-10 border-b '>
      <Link to="/"><img src={assets.logo}  alt="" className=' h-10 md:h-12' /></Link>
      <FaUserCircle className='size-8 ' />
    </div>
  )
}

export default Navbar
