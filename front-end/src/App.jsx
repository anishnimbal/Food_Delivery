import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer.jsx'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart.jsx'
import Place from './pages/Placeorder/Place.jsx'
import Home from './pages/home/home.jsx'
import LoginPopup from './Components/Login/LoginPopup.jsx'


const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (

    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element={<Place/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>

  )
}

export default App
