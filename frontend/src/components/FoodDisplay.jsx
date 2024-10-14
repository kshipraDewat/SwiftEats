import React, { useContext } from 'react'

const FoodDisplay = ({category}) => {


  return (
    <div className='p-20 flex flex-col items-center gap-5' id='food-display'>
      <h2 className='font-bold text-2xl '>Top dishes near you</h2>
      <div className=''>
        Fooditems display here
      </div>
    </div>
  )
}

export default FoodDisplay

