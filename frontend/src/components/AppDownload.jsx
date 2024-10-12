import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className=' flex flex-col items-center justify-center mt-10 gap-5' id='app-download'>

    <div className='flex flex-col items-center justify-center'>
    <p className='font-bold text-2xl'>For Better Experience Download </p>
    <p className='font-bold text-2xl'>Swift<span className='text-orange-600'>Eats</span> App</p>
    </div>
    
    <div className=" flex gap-5">
        <img src={assets.play_store} alt=""  className=' cursor-pointer'/>
        <img src={assets.app_store} alt="" className=' cursor-pointer' />
    </div>
</div>
  )
}

export default AppDownload
