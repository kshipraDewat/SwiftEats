import React, { useContext, useState } from 'react'

import { StoreContext } from '../context/StoreContext';
import { assets } from '../assets/assets';

const FoodItem = ({ image, name, price, desc  }) => {

    const {url,currency} = useContext(StoreContext);

    return (
        <div className=' border rounded shadow '>
            <div className=' relative  '>
                <img className='h-[40vh] md:h-[30vh] w-full object-fill  ' src={url+"/images/"+image} alt=""  />
              
                <img className='absolute rounded-full shadow bottom-0 right-0 cursor-pointer m-3 ' src={assets.add_icon_white} alt="" />
                
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
