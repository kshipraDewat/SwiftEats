import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({category}) => {
  const  {food_list} = useContext(StoreContext)

  return (
    <div className='py-20 px-10 flex flex-col items-center gap-5' id='food-display'>
      <h2 className='font-bold text-2xl '>Top dishes near you</h2>
      <div className=' grid md:grid-cols-3  lg:grid-cols-4 gap-5'>
      {food_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return  <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id} />
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay

