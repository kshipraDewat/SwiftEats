import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiFileList3Line } from "react-icons/ri";
import { FiBox } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className='p-5 pt-10 md:w-[30vw] lg:w-[20vw] border-r h-screen '>
      <div className="flex flex-col gap-3">
        <li className=' list-none flex items-center  gap-2 border p-3 rounded border'>
            <IoMdAddCircleOutline className='size-7'/>
            <p className='font-semibold text-lg'>Add Items</p>
        </li>
        <li className=' list-none flex items-center gap-2 border p-3 rounded border'>
            <RiFileList3Line className='size-7' />
            <p className='font-semibold text-lg'>List Items</p>
        </li>
        <li className=' list-none flex items-center gap-2 border p-3 rounded border'>
            <FiBox className='size-7' />
            <p className='font-semibold text-lg'>Orders</p>
        </li>
      </div>
    </div>
  )
}

export default Sidebar
