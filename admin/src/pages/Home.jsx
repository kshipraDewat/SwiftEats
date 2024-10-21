import React from 'react'
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { assets } from '../assets/assets';


const Home = () => {
  return (
    <div className='flex my-36 mx-auto p-5 px-10 '>
    <MdOutlineAdminPanelSettings className=' size-20 lg:size-28 mx-auto'/>
    <div className='pt-7 lg:pt-11'>
      <img src={assets.logo} alt="" />
    </div>
      
    </div>
  )
}

export default Home
