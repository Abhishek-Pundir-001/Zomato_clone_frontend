import { useState } from "react"
import { assets } from "../../../assets/frontend_assets/assets"

function LoginPopUp({ setCurrState }) {
    const [currForm, setCurrForm] = useState("Sign up")
    return (
        <div className="w-[98vw] h-[100vh] z-10 absolute grid bg-[#00000090]">
            <div className="form-title px-7 py-6 rounded-lg  flex flex-col gap-5 bg-white border place-self-center w-[80vw] md:w-[50vw] lg:w-[23vw]">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold font-serif">{currForm}</h2>
                    <img className="h-4 cursor-pointer" onClick={() => setCurrState(false)} src={assets.cross_icon} />
                </div>
                <form className="flex flex-col gap-3.5">
                    {currForm === "Sign up" ? <input className="bg-transparent border-2 outline-none rounded-lg px-2 py-1" type="text" placeholder="Your name" name="" id="" /> : <></>}
                    <input type="email" placeholder="Your email" className="bg-transparent rounded-lg px-2 py-1 border-2 outline-none "/>
                    <input type="password" placeholder="password" className="bg-transparent rounded-lg px-2 py-1 border-2 outline-none "/>
                    <button className="bg-red-600 py-2 rounded-lg text-white cursor-pointer" type="submit">{currForm}</button>
                    <div className="flex items-start gap-2">
                    <input type="checkbox"  className="mt-1"/><p className="text-sm">By continuing, i agree to the terms of use & privacy policy</p>
                    </div>
                    
                </form>
                {currForm === "Sign up" ? <p className="text-sm text-center">Already have an account? <button className="text-cyan-700 text-lg" onClick={() => setCurrForm("login")}>Login</button></p> : <p className="text-sm text-center">Don't have an account? <button onClick={() => setCurrForm("Sign up")} className="text-cyan-700 text-lg">Sign up</button></p>}

            </div> : <></>

        </div>
    )

}

export default LoginPopUp