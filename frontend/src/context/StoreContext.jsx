import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null);
import axios from 'axios'

const StoreContextProvider = (props) => {

    const url = "http://localhost:4000"
    const [food_list, setFoodList] = useState([]);
    const [token, setToken] = useState("")
    const currency = "₹";
    const deliveryCharge = 50;
   

    
    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data)
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
               setToken(localStorage.getItem("token"))
            }
        
        }
        loadData()
    }, [])

    const contextValue = {
        url,
        token,
        setToken,
        food_list,
        currency,
        deliveryCharge,

    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;