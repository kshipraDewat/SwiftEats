import React, { useContext, useState } from 'react'

import { StoreContext } from '../context/StoreContext';
import { assets } from '../assets/assets';

const FoodItem = ({ image, name, price, desc,id  }) => {

    const {cartItems,addToCart,removeFromCart,url,currency} = useContext(StoreContext);

    return (
        <div className=' border rounded shadow '>
            <div className=' relative  '>
                <img className='h-[40vh] md:h-[30vh] w-full object-fill  ' src={url+"/images/"+image} alt=""  />
                {!cartItems[id]
                ?<img onClick={() => addToCart(id)} className='absolute rounded-full shadow bottom-0 right-0 cursor-pointer m-3 ' src={assets.add_icon_white} alt="" />
                :<div className="flex gap-2 items-center bg-white border rounded-full p-1 w-28 justify-center shadow absolute bottom-0 right-0 m-3">
                        <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" className=' cursor-pointer' />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" className=' cursor-pointer' />
                    </div>
                }
                
            </div>
            <div className=" p-5">
                <div className="flex justify-between items-center gap-5">
                    <p className='font-bold'>{name}</p> 
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="">{desc}</p>
                <p className=" font-bold text-orange-500">{currency}{price}</p>
            </div>
        </div>
    )
}

export default FoodItem
