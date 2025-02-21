import { useState } from "react"
import { assets } from "../../../assets/frontend_assets/assets"

function Navbar() {

    const [menu,setMenu] = useState("Home");


    return (
        <div className="navbar py-5 flex justify-between">
            <img className="h-6" src={assets.logo} />
            <ul className="flex gap-5 list-none text-[#49557e] text-lg">
                <li onClick={()=>setMenu('Home')} className={`${menu === "Home"? `underline`:''} cursor-pointer`}>Home</li>
                <li onClick={()=>setMenu('menu')} className={`${menu === "menu"? `underline`:''} cursor-pointer`}>menu</li>
                <li onClick={()=>setMenu('mobile-app')} className={`${menu === "mobile-app"? `underline`:''} cursor-pointer`}>mobile-app</li>
                <li onClick={()=>setMenu('contact us')} className={`${menu === "contact us"? `underline`:''} cursor-pointer`}>contact us</li>
            </ul>
            <div className="nav-right flex items-center gap-10">
                <img src={assets.search_icon} />
                <div className="relative">
                    <img  src={assets.basket_icon} />
                    <div className="dot h-2 w-2 bg-orange-600 rounded-lg absolute top-[-8px] left-6"></div>
                </div>
                <button className="px-6 py-2 text-lg text-[#49557e] rounded-[50px] cursor-pointer border border-orange-600 hover:bg-[#fff4f2] transition-all ease-in-out">Sign&nbsp;in</button>
            </div>
        </div>
    )
}

export default Navbar