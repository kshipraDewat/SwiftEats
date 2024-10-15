import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

const MyOrders = () => {
  
  const [data,setData] =  useState([]);
  const {url,token,currency} = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
    setData(response.data.data)
  }

  useEffect(()=>{
    if (token) {
      fetchOrders();
    }
  },[token])

  return (
    <div className='m-20  '>
      <h2 className=' font-bold text-xl '>My Orders</h2>
      <div className="flex flex-col gap-5 mt-7 ">
        {data.map((order,index)=>{
          return (
            <div key={index} className='grid  md:grid-cols-3 lg:grid-cols-6 md:items-center justify-center gap-7 md:p-5   text-gray-600 border '>
                <img src={assets.parcel_icon} alt="" className=' size-12' />
                <p className=' text-black font-bold'>{order.items.map((item,index)=>{
                  if (index === order.items.length-1) {
                    return item.name+" x "+item.quantity
                  }
                  else{
                    return item.name+" x "+item.quantity+", "
                  }
                  
                })}</p>
                <p className='font-bold '>{currency}{order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p><span className='text-gray-600' >&#x25cf;</span> <b className='text-gray-600'>{order.status}</b></p>
                <button onClick={fetchOrders} className='border border-orange-500 text-orange-500 p-2 w-28 bg-orange-100 '>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
