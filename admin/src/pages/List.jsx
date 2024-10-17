import React, { useEffect, useState } from 'react'
import {  currency } from '../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {

  const url = import.meta.env.VITE_BACKEND_URL
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {
      id: foodId
    })
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    }
    else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add p-10 px-5 flex flex-col gap-2'>
      <p className='text-lg font-bold'>All Foods List</p>
      <div className='list-table flex flex-col gap-1  '>
        <div className="grid grid-cols-5 gap-10 border p-3 px-5">
          <b>Image</b>
          <b className='w-[10vw]'>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format grid grid-cols-5 gap-10 border items-center p-2'>
              <img src={`${url}/images/` + item.image} alt=""  className='size-10'/>
              <p className='w-[10vw]'>{item.name}</p>
              <p  className='w-[5vw]'>{item.category}</p>
              <p  className='w-[5vw]'>{currency}{item.price}</p>
              <p className='cursor w-[5vw] px-5' onClick={() => removeFood(item._id)}>x</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
