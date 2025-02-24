import { menu_list } from "../../../assets/frontend_assets/assets"

function ExploreMenu({category,setCategory}) {
    return (
            <div className="mt-6 flex flex-col gap-5">
                <h2 className="text-3xl font-medium text-[#262626]">Explore our menu</h2>
                <p className="max-w-[80%]">choose from a diverse menu featuring a delectable array of dishes crafted with finest ingeidents and culinatry expertise .our mission is to satisfy your cravings and elevate your dining experience , one delicious meal at a time</p>
                <div className="flex justify-between gap-8 my-5 overflow-x-auto w-full">
                    {menu_list.map((menu, idx) => {
                        return (
                            <div onClick={()=> setCategory(prev=> prev == menu.menu_name ? "All":menu.menu_name)} key={idx} className="flex flex-col items-center justify-center gap-2">
                                <img className={`w-[7.5vw] cursor-pointer rounded-full ${category == menu.menu_name ? 'border-4 border-orange-400 p-0.5':''}`} src={menu.menu_image} />
                                <p className="text-lg text-[#4b4848] cursor-pointer">{menu.menu_name}</p>
                            </div>
                        )
                    })}
                </div>
                <hr className="h-0 border bg-[#767676] mb-2"/>
            </div>
            
    )
}

export default ExploreMenu