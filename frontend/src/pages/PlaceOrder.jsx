import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {

    const [payment, setPayment] = useState("cod")
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    })

    const { getTotalCartAmount, token, food_list, cartItems, url, setCartItems,currency,deliveryCharge } = useContext(StoreContext);

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const placeOrder = async (e) => {
        e.preventDefault()
        let orderItems = [];
        food_list.map(((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo)
            }
        }))
        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + deliveryCharge,
        }
        if (payment === "stripe") {
            let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
            if (response.data.success) {
                const { session_url } = response.data;
                window.location.replace(session_url);
            }
            else {
                toast.error("Something Went Wrong")
            }
        }
        else{
            let response = await axios.post(url + "/api/order/placecod", orderData, { headers: { token } });
            if (response.data.success) {
                navigate("/myorders")
                toast.success(response.data.message)
                setCartItems({});
            }
            else {
                toast.error("Something Went Wrong")
            }
        }

    }

    useEffect(() => {
        if (!token) {
            toast.error("to place an order sign in first")
            navigate('/cart')
        }
        else if (getTotalCartAmount() === 0) {
            navigate('/cart')
        }
    }, [token])

    return (
        <form onSubmit={placeOrder} className='p-20  flex flex-col md:flex-row justify-between gap-10 lg:gap-32 '>
            <div className="w-full  ">
                <p className='font-bold text-xl mb-4'>Delivery Information</p>
                <div className="flex gap-2">
                    <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First name' required className=' w-full mb-3 p-3 border rounded outline-orange-500' />
                    <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' required className=' w-full mb-3 p-3 border rounded outline-orange-500' />
                </div>
                <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' required className=' w-full mb-3 p-3 border rounded outline-orange-500' />
                <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' required className=' w-full mb-3 p-3 border rounded outline-orange-500' />
                <div className="flex gap-2">
                    <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' required className=' w-full mb-3 p-3 border rounded outline-orange-500' />
                    <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' required className=' w-full mb-3 p-3 border rounded outline-orange-500' />
                </div>
                <div className="flex gap-2">
                    <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' required className=' w-full mb-3 p-3 border rounded outline-orange-500'/>
                    <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' required className=' w-full mb-3 p-3 border rounded outline-orange-500' />
                </div>
                <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' required className=' w-full mb-3 p-3 border rounded outline-orange-500' />
            </div>
            <div className="w-full flex flex-col justify-center ">
                <div className="flex flex-col gap-2 ">
                    <h2 className='font-bold text-lg'>Cart Totals</h2>
                    <div className='flex flex-col gap-2'>
                        <div className="flex justify-between"><p>Subtotal</p><p>{currency}{getTotalCartAmount()}</p></div>
                        <hr />
                        <div className="flex justify-between"><p>Delivery Fee</p><p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p></div>
                        <hr />
                        <div className="flex justify-between"><b>Total</b><b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b></div>
                    </div>
                </div>
                <div className="flex flex-col  items-start gap-2">
                    <h2 className='text-lg font-bold mt-5'>Payment Method</h2>
                    <div onClick={() => setPayment("cod")} className="flex  items-center gap-2 border border-orange-500 p-3 rounded cursor-pointer  ">
                        <img src={payment === "cod" ? assets.checked : assets.un_checked} alt="" />
                        <p>COD ( Cash on delivery )</p>
                    </div>
                    <div onClick={() => setPayment("stripe")} className=" flex items-center gap-2 border border-orange-500 p-3 rounded cursor-pointer ">
                        <img src={payment === "stripe" ? assets.checked : assets.un_checked} alt="" />
                        <p>Stripe ( Credit / Debit )</p>
                    </div>
                </div>
                <button className=' mt-5 border-none bg-orange-500 text-white p-3 rounded cursor-pointer' type='submit'>{payment==="cod"?"Place Order":"Proceed To Payment"}</button>
            </div>
        </form>
    )
}

export default PlaceOrder
