import { useContext } from "react"
import { StoreContext } from "../../Context/StoreContext"
import FoodItem from "../FoodItem/FoodItem"


function FoodDisplay({ category }) {
    const { food_list } = useContext(StoreContext)
    return (
        <div className="mt-3">
            <h2 className="text-4xl font-medium mb-7">Top dishes near you</h2>
            <div className="flex md:justify-between flex-wrap justify-center gap-5">
                {food_list.map((item, idx) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} key={idx} />

                        )
                    }

                })}
            </div>
        </div>
    )
}

export default FoodDisplay;