import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import PlaceOrder from "./pages/PlaceOrder"
import MyOrders from "./pages/MyOrders"
import Footer from "./components/Footer"
import LoginPopup from "./components/LoginPopup"
import { useState } from "react"


function App() {
  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
     {showLogin?<LoginPopup setShowLogin={setShowLogin}/>: <></> }
   <div className="">
      <Navbar  setShowLogin={setShowLogin}/>
       <Routes>
        <Route path="/" element={ <Home/>} />
         <Route path='/cart' element={<Cart />}/>
          <Route path='/order' element={<PlaceOrder />}/>
          <Route path='/orders' element={<MyOrders />}/>
      </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
