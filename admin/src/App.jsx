import Navbar from "./component/Navbar"
import Sidebar from "./component/Sidebar"
import { Route, Routes } from 'react-router-dom'
import Add from "./pages/Add"
import List from "./pages/List"
import Orders from "./pages/Orders"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className=" ">
      <ToastContainer />
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
