import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiFileList3Line } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='p-5 pt-12 md:w-64 border-r h-screen text-gray-500  '>
      <div className="flex flex-col gap-3">
        <NavLink to='/add' className='  list-none flex items-center  gap-2 border  p-3 rounded border  focus:border-orange-500 focus:bg-orange-50'>
            <IoMdAddCircleOutline className='size-7'/>
            <p className=' hidden sm:block font-semibold text-lg'>Add Items</p>
        </NavLink>
        <NavLink to='/list'  className=' list-none flex items-center gap-2 border   p-3 rounded border focus:border-orange-500 focus:bg-orange-50'>
            <RiFileList3Line className='size-7' />
            <p className=' hidden sm:block font-semibold text-lg'>List Items</p>
        </NavLink>
        <NavLink to='/orders' className=' list-none flex items-center gap-2 border p-3 rounded border focus:border-orange-500 focus:bg-orange-50'>
            <FiBox className='size-7' />
            <p className='hidden sm:block font-semibold text-lg'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
