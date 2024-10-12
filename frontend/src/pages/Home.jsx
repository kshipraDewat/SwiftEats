import React, { useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import AppDownload from '../components/AppDownload'

const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenu setCategory={setCategory} category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home
