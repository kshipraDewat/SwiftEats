import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { IoMdLogOut } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { LuBox } from "react-icons/lu";

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const navigate = useNavigate();
  return (
    <div className='p-2 flex justify-between items-center border border-e shadow'>
       <img src={assets.logo} alt="" className='h-8' />
       <ul className=" hidden md:flex flex gap-5 items-center ">
       <Link to={"/"}  onClick={() => setMenu("home")} className={`${menu === "home" ? " underline " : ""}`} > Home</Link>
       <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "underline" : ""}`}>menu</a>
       <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "underline" : ""}`}>mobile app</a>
       <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "underline" : ""}`}>contact us</a>
       </ul>

       <div className="flex items-center gap-5 ">
        <Link to='/cart' className=' flex'>
          <FaShoppingBasket className='size-6' />
          <div className='h-2 w-2 bg-orange-500 rounded-full'></div>
        </Link>
         <button className='p-2 text-white rounded bg-orange-500' >sign in</button>
          <div className=' hidden  '>
            <FaUserCircle className='size-6'/>
            <ul className=' border p-2 flex flex-col gap-2 rounded  '>
              <li onClick={()=>navigate('/orders')} className='flex gap-1'> <LuBox className='size-6' /> <p>Orders</p></li>
              <hr />
              <li className='flex gap-1'> <IoMdLogOut className='size-6' /> <p>Logout</p></li> 
            </ul>
          </div>
        

      </div>
        
    </div>
  )
}

export default Navbar
