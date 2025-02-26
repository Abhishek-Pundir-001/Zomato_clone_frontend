import { useContext } from "react"
import { StoreContext } from "../../Context/StoreContext"

function Cart() {
    const { food_list, cartItems, removeFromCart } = useContext(StoreContext)
    return (
        <div className="mt-5">
            <div >
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center my-2">
                    <p className="text-center">Items</p>
                    <p className="text-center">Title</p>
                    <p className="text-center">Price</p>
                    <p className="text-center">Quantity</p>
                    <p className="text-center">Total</p>
                    <p className="text-center">Remove</p>
                </div>
                <hr className="h-0.5 border-none bg-[#e2e2e2]"/>
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <>
                                <div className="grid my-3 grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center">
                                    <div className="flex justify-center"><img className="w-24 rounded-lg" src={item.image} /></div>
                                    <p className="text-center">{item.name}</p>
                                    <p className="text-center">${item.price}</p>
                                    <p className="text-center">{cartItems[item._id]}</p>
                                    <p className="text-center">${item.price * cartItems[item._id]}</p>
                                    <p onClick={()=>removeFromCart(item._id)} className="text-center cursor-pointer">x</p>
                                </div>
                                <hr className="h-0.5 border-none bg-[#e2e2e2]"/>
                            </>

                        )
                    }
                })}
            </div>

        </div>
    )
}
export default Cart