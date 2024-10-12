import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import PlaceOrder from "./pages/PlaceOrder"
import MyOrders from "./pages/MyOrders"
import Footer from "./components/Footer"


function App() {

  return (
   <div className="">
      <Navbar/>
       <Routes>
        <Route path="/" element={ <Home/>} />
         <Route path='/cart' element={<Cart />}/>
          <Route path='/order' element={<PlaceOrder />}/>
          <Route path='/myorders' element={<MyOrders />}/>
      </Routes>
      <Footer/>
   </div>
  )
}

export default App
