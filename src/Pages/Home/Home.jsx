import { useState } from "react";
import ExploreMenu from "../../Components/Exploremenu/ExploreMenu";
import Header from "../../Components/Header/Header";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";

function Home() {
    const [category,setCategory] = useState("All")
    return (
        <div>
            <Header />
            <div >
                <ExploreMenu category={category} setCategory={setCategory}/>
                <FoodDisplay category={category}/>
            </div>
        </div>
    )
}

export default Home; 