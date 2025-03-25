import { useContext, useState } from "react"
import { assets } from "../../../assets/frontend_assets/assets"
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from "../../Context/StoreContext";

function Navbar({ setCurrState }) {

    const [menu, setMenu] = useState("Home");
    const { getCartTotal, token, setToken } = useContext(StoreContext);
    const [dropdown, setDropDown] = useState(false);
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }

    return (
        <div className="navbar py-5 flex justify-between items-center">
            <Link to='/'><img className="h-5" src={assets.logo} /></Link>
            <ul className="md:flex gap-3 list-none text-[#49557e] text-lg hidden">
                <Link to='/' onClick={() => setMenu('Home')} className={`${menu === "Home" ? `underline` : ''} cursor-pointer`}>Home</Link>
                <a href="#explore-menu" onClick={() => setMenu('menu')} className={`${menu === "menu" ? `underline` : ''} cursor-pointer`}>menu</a>
                <a href="#app-download" onClick={() => setMenu('mobile-app')} className={`${menu === "mobile-app" ? `underline` : ''} cursor-pointer`}>mobile-app</a>
                <a href="#contact" onClick={() => setMenu('contact us')} className={`${menu === "contact us" ? `underline` : ''} cursor-pointer`}>contact us</a>
            </ul>
            <div className="nav-right flex items-center gap-4 md:gap-7">
                <img src={assets.search_icon} />
                <div className="relative">
                    <Link to='/cart'><img className="w-5" src={assets.basket_icon} /></Link>
                    {getCartTotal() > 0 ? <div className="dot h-2 w-2 bg-orange-600 rounded-lg absolute top-[-8px] left-6"></div> : <></>}
                </div>
                {!token ? <button onClick={() => setCurrState(true)} className="px-4 py-1.5 md:px-8 md:py-2 text-lg text-[#49557e] rounded-[50px] cursor-pointer border border-orange-600 hover:bg-[#fff4f2] transition-all ease-in-out">Sign&nbsp;Up</button> :
                    <div className="relative cursor-pointer" onMouseOver={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
                        <img src={assets.profile_icon} />
                        <ul className={`${dropdown ? "flex flex-col  gap-2.5" : "hidden"} shadow-[0_0_5px_black] absolute right-0 bg-green-900 z-10 p-5 text-white rounded-sm`}>
                            <li onClick={() => navigate("/myorders")} className="flex items-center gap-2 w-16"><img src={assets.bag_icon} alt="" className="w-5" /><p className="hover:text-orange-300 text-sm">Orders</p></li>
                            <hr />
                            <li className="flex items-center gap-2 w-16" onClick={logout}><img src={assets.logout_icon} alt="" className="w-5" /><p className="hover:text-orange-300 text-sm">Logout</p></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar