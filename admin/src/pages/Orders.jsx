import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets,currency } from '../assets/assets'


const Orders = () => {

  const url = import.meta.env.VITE_BACKEND_URL
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(`${url}/api/order/list`)
    if (response.data.success) {
      setOrders(response.data.data.reverse());
    }
    else {
      toast.error("Error")
    }
  }

  const statusHandler = async (event, orderId) => {
    console.log(event, orderId);
    const response = await axios.post(`${url}/api/order/status`, {
      orderId,
      status: event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
    }
  }


  useEffect(() => {
    fetchAllOrders();
  }, [])

  return (
     <div className='order add p-10 px-5  flex flex-col gap-2 w-[80vw] '>
      <h3 className='text-lg font-bold'>Order Page</h3>
      <div className="order-list flex flex-col gap-2   ">
        {orders.map((order, index) => (
          <div key={index} className='order-item grid grid-cols-2 lg:grid-cols-5 border  gap-3  p-5'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food font-bold'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity
                  }
                  else {
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>
              <p className='order-item-name pt-3 text-sm'>{order.address.firstName + " " + order.address.lastName}</p>
              <div className='order-item-address text-sm '>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className='order-item-phone text-sm'>{order.address.phone}</p>
            </div>
            <p className='hidden lg:block'>Items : {order.items.length}</p>
            <p>{currency}{order.amount}</p> 
            <select onChange={(e) => statusHandler(e, order._id)} value={order.status} name="" id="" className='border p-1 h-10 w-32 text-xs font-bold bg-orange-100 border-orange-200 outline-none'>
              <option value="Food Processing" className='bg-white'>Food Processing</option>
              <option value="Out for delivery" className='bg-white'>Out for delivery</option>
              <option value="Delivered" className='bg-white'>Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
