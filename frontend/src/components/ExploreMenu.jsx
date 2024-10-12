import React, { useContext } from 'react'
import { menu_list } from '../assets/assets'



const ExploreMenu = ({category,setCategory}) => {
  
  return (
    <div className=' mt-10 flex flex-col px-10 md:px-20 items-center gap-5' id='explore-menu'>
      <h1 className='text-2xl font-bold'>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className='grid grid-cols-4 lg:grid-cols-8 gap-10 items-center justify-center '>
      {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className=' items-center justify-center flex flex-col gap-1 cursor-pointer'>
                    <img src={item.menu_image} className={category===item.menu_name?" border border-[4px] border-orange-500 rounded-full ":""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu