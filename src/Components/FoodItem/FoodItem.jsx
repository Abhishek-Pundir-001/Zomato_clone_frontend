import { useContext } from "react"
import { assets } from "../../../assets/frontend_assets/assets"
import { StoreContext } from "../../Context/StoreContext"
import toast from "react-hot-toast"

function FoodItem({ id, name, price, description, image })  {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
    return (
        <div className="relative flex flex-col gap-1 items-center rounded-lg">
            <img className="w-56 shadow-[0_0_5px_black] rounded-lg" src={image} />
            {!cartItems[id] ? <img onClick={() => {addToCart(id), toast.success("added to cart")}} className="absolute z-10 top-1 left-1 w-8" src={assets.add_icon_white} alt="" />
                : <div className="flex bg-amber-50 rounded-4xl p-2 gap-1.5 w-24 justify-around absolute top-1 left-1">
                    <img className="w-6" src={assets.remove_icon_red} onClick={() => {removeFromCart(id),toast.error("remove from the cart")}} />
                    <p className="font-bold text-lg">{cartItems[id]}</p>
                    <img className="w-6" onClick={() => {addToCart(id), toast.success("added to cart")}} src={assets.add_icon_green} alt="" />
                </div>

            }

            <div className="py-1">
                <p className="text-lg font-medium text-[#302c2c]">{name}</p>
                <img src={assets.rating_starts} />
            </div>
            <p className="text-sm w-48">{description}</p>
            <p className="text-xl text-red-500 font-medium my-1.5">${price}</p>

        </div>
    )
}
export default FoodItem