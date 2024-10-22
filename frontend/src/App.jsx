import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import PlaceOrder from "./pages/PlaceOrder"
import MyOrders from "./pages/MyOrders"
import Footer from "./components/Footer"
import LoginPopup from "./components/LoginPopup"
import { useState } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from "./pages/Verify"


function App() {
  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
      <ToastContainer/>
     {showLogin?<LoginPopup setShowLogin={setShowLogin}/>: <></> }
   <div className="">
      <Navbar  setShowLogin={setShowLogin}/>
       <Routes>
        <Route path="/" element={ <Home/>} />
         <Route path='/cart' element={<Cart />}/>
          <Route path='/order' element={<PlaceOrder />}/>
          <Route path='/myorders' element={<MyOrders />}/>
          <Route path='/verify' element={<Verify/>}/>
      </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
