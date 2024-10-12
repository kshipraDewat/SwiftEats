import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className=' relative m-5 md:m-10 lg:mx-20 '>
            <img src={assets.headerimg} alt=""  className=' h-[35vh] md:h-[40vh] lg:h-[54vh] w-full rounded-2xl '/>
            <div className=' absolute top-0 flex flex-col gap-3 justify-center h-full  md:p-20 p-5 '>
                <h2 className='  font-semibold text-5xl text-white  '>Order your favourite food here</h2>
                <p className='hidden md:block text-white lg:w-[40vw]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <button className=' p-2 md:p-3 bg-white rounded-full w-32 text-orange-600'>View Menu</button>
            </div>
        </div>
    )
}

export default Header
