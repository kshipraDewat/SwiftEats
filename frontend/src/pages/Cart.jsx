import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {


  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, currency, deliveryCharge } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className=' pt-10 flex flex-col items-center  gap-10'>
      <div className=" mx-auto">
        <div className="  flex justify-center gap-10 font-bold text-gray-400">
          <p className='w-[7vw]'>Items</p> <p className='w-[8vw]'>Title</p> <p className='w-[5vw]'>Price</p> <p className='w-[5vw]'>Qty.</p> <p className='w-[5vw]'> Total</p> <p className='w-[5vw]'> Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (<div key={index}>
              <div className="flex gap-11 items-center ">
                <img src={url + "/images/" + item.image} alt="" className='size-16 p-1' />
                <p className='w-[10vw]'>{item.name}</p>
                <p className='w-[5vw]'>{currency}{item.price}</p>
                <div className='w-[5vw]'>{cartItems[item._id]}</div>
                <p className='w-[5vw]'>{currency}{item.price * cartItems[item._id]}</p>
                <p className='w-[5vw]' onClick={() => removeFromCart(item._id)}><MdDeleteOutline /></p>
              </div>
              <hr />
            </div>)
          }
        })}

      </div>
      <div className="flex flex-col-reverse  md:flex-row lg:w-[50vw]  gap-20 ">
        <div className="flex flex-col gap-5 w-full    ">
        <h2 className='font-bold text-lg'>Cart Totals</h2>
          <div className='flex flex-col gap-2'>
            <div className="flex justify-between"><p>Subtotal</p><p>{currency}{getTotalCartAmount()}</p></div>
            <hr />
            <div className="flex justify-between"><p>Delivery Fee</p><p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p></div>
            <hr />
            <div className="flex justify-between"><b>Total</b><b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b></div>
          </div>
          <button onClick={() => navigate('/order')} className=' p-2  bg-orange-500 text-white rounded mt-2'>PROCEED TO CHECKOUT</button>
        </div>
        <div className=" text-gray-600 w-full mt-10 ">
          <div className='flex flex-col gap-2'>
            <p className=''>If you have a promo code, Enter it here</p>
            <div className='flex '>
              <input type="text" placeholder='promo code' className='border p-1 rounded' />
              <button className=' bg-black text-white p-2 rounded'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cart