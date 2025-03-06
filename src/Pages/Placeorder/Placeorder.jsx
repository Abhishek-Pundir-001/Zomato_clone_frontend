import { useContext, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";


function Placeholder() {
    const { getCartTotal, food_list, cartItems, url, token } = useContext(StoreContext)
    const cartValue = getCartTotal()

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

    function handleUserInput(e) {
        const { name, value } = e.target;
        //   console.log(name,value)
        setData({
            ...data, [name]: value
        })
    }

    async function placeOrder(event) {
        event.preventDefault()
        let orderItems = [];
        food_list.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo)
            }
        })

        let orderData = {
            address: data,
            items: orderItems,
            amount: getCartTotal() + 2
        }

        try {
            let response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });

            if (response?.data?.success) {
                const  {session_url}  = response?.data
                window.location.replace(session_url)
            }

        } 
        catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={placeOrder} className="flex flex-wrap gap-5 md:gap-0 mt-5 justify-between items-start">
            <div className="left-section flex flex-col gap-3">
                <h2 className="text-2xl text-black font-semibold mb-5">Delivery Information</h2>
                <div className="flex flex-col md:flex-row gap-3">
                    <input required onChange={(e) => handleUserInput(e)} value={data.firstName} name="firstName" placeholder="First name" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600" type="text" />
                    <input required onChange={(e) => handleUserInput(e)} value={data.lastName} name="lastName" placeholder="last name" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1] outline-orange-600" type="text" />
                </div>
                <input required onChange={(e) => handleUserInput(e)} value={data.email} name="email" placeholder="Email address" type="text" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600" />
                <input required onChange={(e) => handleUserInput(e)} value={data.street} name="street" placeholder="Street" type="text" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600" />
                <div className="flex flex-col md:flex-row gap-3">
                    <input required onChange={(e) => handleUserInput(e)} value={data.city} name="city" placeholder="City" type="text" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600" />
                    <input required onChange={(e) => handleUserInput(e)} value={data.state} name="state" placeholder="State" type="text" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600" />
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <input required onChange={(e) => handleUserInput(e)} value={data.zipcode} name="zipcode" placeholder="Zip Code" type="text" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600" />
                    <input required onChange={(e) => handleUserInput(e)} value={data.country} name="country" placeholder="Country" type="text" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600" />
                </div>
                <input required onChange={(e) => handleUserInput(e)} value={data.phone} name="phone" placeholder="Phone" type="text" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600" />
            </div>
            <div className="cart-total flex gap-3 flex-col w-full md:w-1/3">
                <h2 className="text-xl font-semibold">Cart Totals</h2>
                <div className="flex flex-col gap-2">
                    <div className="cart-total-details flex justify-between items-center">
                        <p>Subtotal</p>
                        <p>{'$' + cartValue}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details flex justify-between items-center">
                        <p>Delivery Fee</p>
                        <p>{cartValue > 0 ? `$` + 2 : '$' + 0}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details flex justify-between items-center">
                        <p>Total</p>
                        <p>{cartValue > 0 ? `$` + (cartValue + 2) : `$` + 0}</p>
                    </div>
                    <hr />
                </div>
                <button type="submit" className="py-3 text-white text-lg bg-orange-600 hover:bg-orange-500 cursor-pointer rounded-lg mt-8">Proceed to PAY</button>
            </div>
        </form>
    )
}

export default Placeholder;