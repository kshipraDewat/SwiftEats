import React, { useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import AppDownload from '../components/AppDownload'
import FoodDisplay from '../components/FoodDisplay'

const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div className=' '>
        <Header/>
        <ExploreMenu setCategory={setCategory} category={category}/>
        <FoodDisplay/>
        <AppDownload/>
    </div>
  )
}

export default Home
