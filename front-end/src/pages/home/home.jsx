import React, { useState } from 'react'
import './home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownlaod from '../../Components/AppDownload/AppDownlaod'


const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownlaod/> 
    </div>
  )
}

export default Home
