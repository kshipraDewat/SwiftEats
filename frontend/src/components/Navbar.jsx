import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { IoMdLogOut } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import  { StoreContext } from '../context/StoreContext'

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount, token ,setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate('/')
    }
  return (
    <div className='p-5 px-10 md:px-20 flex justify-between items-center border border-e shadow    '>
       <img src={assets.logo} alt="" className=' h-6 md:h-8' />
       <ul className=" hidden lg:flex flex gap-5 items-center ">
       <Link to={"/"}  onClick={() => setMenu("home")} className={`${menu === "home" ? " underline " : ""}`} > Home</Link>
       <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "underline" : ""}`}>menu</a>
       <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "underline" : ""}`}>mobile app</a>
       <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "underline" : ""}`}>contact us</a>
       </ul>

       <div className="flex items-center gap-3 ">
        <Link to='/cart' className=' flex'>
          <FaShoppingBasket className='size-7' />
          <div   className={getTotalCartAmount() > 0 ? "h-2 w-2 bg-orange-500 rounded-full" : ""}></div>
        </Link>
        {!token ? <button onClick={()=> setShowLogin(true)} className='py-2 px-5 text-white rounded-full bg-orange-500 ' >sign in</button>
          :<div className='  '>
            <FaUserCircle className='size-6 relative'/>
            <ul className=' border p-2 mt-1 flex flex-col gap-2 rounded absolute z-10 bg-white  '>
              <li onClick={()=>navigate('/orders')} className='flex gap-1'> <LuBox className='size-6' /> <p>Orders</p></li>
              <hr />
              <li onClick={logout} className='flex gap-1'> <IoMdLogOut className='size-6' /> <p>Logout</p></li> 
            </ul>
          </div>
        }
        

      </div>
        
    </div>
  )
}

export default Navbar
