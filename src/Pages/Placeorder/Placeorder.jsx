import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

function Placeholder() {
    const {getCartTotal} = useContext(StoreContext)
    const cartValue = getCartTotal()
    return (
        <form className="flex flex-wrap gap-5 md:gap-0 mt-5 justify-between items-start">
            <div className="left-section flex flex-col gap-3">
                <h2 className="text-2xl text-black font-semibold mb-5">Delivery Information</h2>
                <div className="flex flex-col md:flex-row gap-3">
                    <input  placeholder="First name" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600" type="text" />
                    <input placeholder="last name" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1] outline-orange-600" type="text" />
                </div>
                <input placeholder="Email address" type="text" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600"/>
                <input placeholder="Street" type="text" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600"/>
                <div className="flex flex-col md:flex-row gap-3">
                    <input placeholder="City" type="text" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600"/>
                    <input placeholder="State" type="text" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600"/>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <input placeholder="Zip Code" type="text" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600"/>
                    <input placeholder="Country" type="text" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600"/>
                </div>
                <input placeholder="Phone" type="text" className="bg-transparent border-1 border-[#c5c5c5] rounded-lg px-3.5 py-1 outline-orange-600"/>
            </div>
            <div className="cart-total flex gap-3 flex-col w-full md:w-1/3">
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
                    <button className="py-3 text-white text-lg bg-orange-600 hover:bg-orange-500 cursor-pointer rounded-lg mt-8">Proceed to PAY</button>
                </div>
        </form>
    )
}

export default Placeholder;