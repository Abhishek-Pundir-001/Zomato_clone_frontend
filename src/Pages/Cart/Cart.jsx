import { useContext, useState } from "react"
import { StoreContext } from "../../Context/StoreContext"

function Cart() {
    const { food_list, cartItems, removeFromCart,getCartTotal } = useContext(StoreContext)
    const cartValue = getCartTotal()
    return (
        <div className="mt-5">
            <div >
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center my-2">
                    <p >Items</p>
                    <p >Title</p>
                    <p >Price</p>
                    <p >Quantity</p>
                    <p >Total</p>
                    <p >Remove</p>
                </div>
                <hr className="h-0.5 border-none bg-[#e2e2e2]" />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <>
                                <div key={index} className="grid my-3 grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center">
                                    <div ><img className="w-14 md:w-24 rounded-lg" src={item.image} /></div>
                                    <p >{item.name}</p>
                                    <p >${item.price}</p>
                                    <p >{cartItems[item._id]}</p>
                                    <p >${item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className="text-center cursor-pointer">x</p>
                                </div>
                                <hr className="h-0.5 border-none bg-[#e2e2e2]" />
                            </>

                        )
                    }
                })}
            </div>

            <div className="cart-bottom mt-5 gap-5 flex flex-col-reverse justify-center md:flex-row md:justify-between md:items-center">
                <div className="cart-total flex gap-3 flex-col w-full md:w-1/3 lg:w-1/2">
                    <h2 className="text-xl font-semibold">Cart Totals</h2>
                    <div className="flex flex-col gap-2">
                        <div className="cart-total-details flex justify-between items-center">
                            <p>Subtotal</p>
                            <p>{'$'+cartValue}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details flex justify-between items-center">
                            <p>Delivery Fee</p>
                            <p>{cartValue > 0 ? `$`+2 :'$' + 0}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details flex justify-between items-center">
                            <p>Total</p>
                            <p>{cartValue >0 ? `$`+(cartValue+2) :`$` + 0 }</p>
                        </div>
                        <hr />
                    </div>
                    <button className="py-3 text-white text-lg bg-orange-600 hover:bg-orange-500 cursor-pointer rounded-lg">Proceed to checkout</button>
                </div>

                <div className="promocode text-center">
                    <div>
                        <p className="mb-2 text-lg font-medium">If you have a promo code,Enter it here</p>
                        <div className="cart-promo-input py-1 bg-[#d7d2d2] rounded-4xl flex justify-between items-center">
                            <input className="py-1.5 px-4 outline-none w-[70%] bg-transparent" type="text" placeholder="promo code" />
                            <button className="rounded-4xl cursor-pointer
                             bg-black px-7 py-2 text-white">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Cart