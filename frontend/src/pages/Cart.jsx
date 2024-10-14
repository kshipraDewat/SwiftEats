import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {url,currency,deliveryCharge} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className=' h-[50vh] flex flex-col items-center justify-center gap-10'>
      <div className="cart-items">
        <div className="flex gap-10 font-bold text-gray-400">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
     
      </div>
      <div className="flex justify-center items-center gap-20 ">
        <div className=" w-full flex flex-col gap-5">
          <h2 className='font-bold'>Cart Totals</h2>
          <div className=' flex flex-col gap-2 w-[30vw]'>
            <div className="flex justify-between "><p>Subtotal</p><p>{currency}</p></div>
            <hr />
            <div  className="flex justify-between"><p>Delivery Fee</p><p>{currency}</p></div>
            <hr />
            <div  className="flex justify-between"><b>Total</b><b>{currency}</b></div>
          </div>
          <button onClick={()=>navigate('/order') } className='border p-2 mx-auto bg-orange-500 text-white rounded'>PROCEED TO CHECKOUT</button>
        </div>
        <div className=" ">
          <div className='flex flex-col gap-2'>
            <p>If you have a promo code, Enter it here</p>
            <div className='flex '>
              <input type="text" placeholder='promo code' className='border p-1 rounded'/>
              <button className=' bg-black text-white p-2 rounded'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>

)
}

export default Cart