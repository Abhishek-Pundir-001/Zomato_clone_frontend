import { createContext, use, useEffect, useState } from "react";
import toast from "react-hot-toast";
// import { food_list } from "../../assets/frontend_assets/assets";
import axios from 'axios'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [token,setToken] = useState(localStorage.getItem("token" || ""))
    const [food_list,setFoodList]= useState([]);
    const url = 'http://localhost:4000';
    

    const addToCart = async (itemId) => {
        if(!token){
            toast.error("please login")
            return
        }
        if (!cartItems[itemId]) {
            // console.log(itemId)
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        
        await axios.post(`${url}/api/cart/add`,{itemId},{headers:{token}})
    } 

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        await axios.post(`${url}/api/cart/remove`,{itemId},{headers:{token}})
    }

    const getCartTotal = () => {
        let total = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id == item)
                total += itemInfo.price * cartItems[item]
            }

        }
        return total
    }

    async  function fetchFoodItems(){
        const res = await axios.get('http://localhost:4000/api/food/list');
        if(res?.data?.success){
            setFoodList(res?.data?.foods)
        }
    }

    async function fetchCartData(){
        const res = await axios.post(`${url}/api/cart/get`,{},{headers:{token}});
        if(res?.data?.success){
            setCartItems(res?.data?.cartData)
        }
    }

    useEffect(() => {
        // console.log(cartItems)
        async function loadData(params) {
           await fetchFoodItems()
           await fetchCartData()
        }

        loadData()
        
    },[cartItems])


    const contextValue = {
        food_list,
        setFoodList,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getCartTotal,
        token,
        setToken,
        url
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider