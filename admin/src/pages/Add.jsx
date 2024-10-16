import React, { useState } from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {


    const url = import.meta.env.VITE_BACKEND_URL
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    });

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (!image) {
            toast.error('Image not selected');
            return null;
        }

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success) {
            toast.success(response.data.message)
            setData({
                name: "",
                description: "",
                price: "",
                category: data.category
            })
            setImage(false);
        }
        else {
            toast.error(response.data.message)
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className='p-10 w-[80vw] md:w-[60vw]  lg:w-[35vw] mx-auto lg:mx-10 '>
            <form className=' flex gap-5 flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex flex-col gap-2 '>
                    <p className=''>Upload image</p>
                    <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
                    <label htmlFor="image">
                        {!image ? <div className=' border border-dashed bg-gray-100  border-gray-400 h-32 w-full flex  items-center justify-center text-gray-400 gap-1'> <FaCloudUploadAlt className='size-6' /> <p>Upload Image</p> </div> 
                        : <div className='border border-dashed p-3 w-32 '><img src={URL.createObjectURL(image)} className='  ' /></div> } 
                    </label>
                </div>
                <div className='add-product-name flex flex-col'>
                    <p>Product name</p>
                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required className='border p-2 rounded' />
                </div>
                <div className='add-product-description flex flex-col'>
                    <p>Product description</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Write content here' required  className='border p-2 rounded'/>
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex flex-col'>
                        <p>Product category</p>
                        <select name='category' onChange={onChangeHandler} className='border p-2 rounded' >
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className='add-price flex flex-col'>
                        <p>Product Price</p>
                        <input type="Number" name='price' onChange={onChangeHandler} value={data.price} placeholder='199' className='border p-2 rounded' />
                    </div>
                </div>
                <button type='submit' className='border p-2 bg-black text-white rounded' >ADD</button>
            </form>
        </div>
    )
}

export default Add

