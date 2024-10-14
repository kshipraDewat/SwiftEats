import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { RxCross2 } from "react-icons/rx";
import axios from 'axios'
import { StoreContext } from '../context/StoreContext';

const LoginPopup = ({setShowLogin}) => {
    const { setToken, url } = useContext(StoreContext)
    const [currState, setCurrState] = useState("Sign Up");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (e) => {
       e.preventDefault()

        let new_url = url;
        if (currState === "Login") {
            new_url += "/api/user/login";
        }
        else {
            new_url += "/api/user/register"
        }
        const response = await axios.post(new_url, data);
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        }
    }


  return (
    <div className=' flex justify-center items-center w-full h-full absolute z-10 bg-black bg-opacity-65  '>
    <form  onSubmit={onLogin}  className=" flex flex-col w-96 gap-2 p-8 border bg-white rounded   ">
        <div className="flex items-center justify-between">
            <h2 className='text-xl font-bold'>{currState}</h2> 
            <RxCross2 onClick={()=>setShowLogin(false)}  />
           
            
        </div>
        <div className=" flex flex-col gap-2 ">
            {currState === "Sign Up" 
            ? <input name='name' onChange={onChangeHandler} value={data.name}  type="text" placeholder='Your name' required className='border p-2 rounded ' /> : <></>}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required className='border p-2 rounded ' />
            <input name='password' onChange={onChangeHandler}  value={data.password} type="password" placeholder='Password' required className='border p-2 rounded '  />
        </div>
        <button className=' p-2 bg-orange-600 text-white rounded'>{currState === "Login" ? "Login" : "Create account"}</button>
        <div className="flex gap-1 ">
            <input type="checkbox" name="" id="" required/>
            <p className='pt-5'>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login"
            ? <p className=''>Create a new account? <span onClick={() => setCurrState('Sign Up')} className='text-orange-600'>Click here</span></p>
            : <p>Already have an account? <span onClick={() => setCurrState('Login')} className='text-orange-600'>Login here</span></p>
        }
    </form>
</div>
  )
}

export default LoginPopup
