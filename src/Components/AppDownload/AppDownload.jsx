import { assets } from "../../../assets/frontend_assets/assets"
import './AppDownload.css'

function AppDownload(){
    return(
     <div className="app-download mx-auto mt-10 w-fit" id="app-download">
        <p className="text-center text-2xl font-semibold leading-10">For Better Experience Download <br />Tomato App</p>
        <div className="flex justify-center gap-5 mt-3">
            <img className="w-24 md:w-48 cursor-pointer hover:scale-105" src={assets.play_store} />
            <img className="w-24 md:w-48 cursor-pointer hover:scale-105" src={assets.app_store} />
        </div>
     </div>
    )
}

export default  AppDownload