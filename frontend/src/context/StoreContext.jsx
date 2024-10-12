import { createContext } from "react"
import { menu_list } from "../assets/assets.js"
export const StoreContext = createContext(null)
const StoreContextProvider =(props)=>{

    const contextValue ={
        menu_list,
    }

    return(
        <StoreContextProvider.Provider value={contextValue}> 
            {props.children}
        </StoreContextProvider.Provider>
    )
}