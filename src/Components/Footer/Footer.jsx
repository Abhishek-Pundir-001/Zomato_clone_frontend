import { assets } from "../../../assets/frontend_assets/assets"

function Footer() {
    return (
        <div className="footer-container flex flex-col items-center gap-5 text-[#d9d9d9] bg-[#323232] px-[8vw] py-5 pt-20 mt-24">
            <div className="footer-sub-container flex flex-col gap-10 md:flex-row justify-between">
                <div className="footer-left flex flex-col gap-5 items-start basis-[45%]">
                    <img className="w-40" src={assets.logo} />
                    <p className="font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta, voluptatibus quod reprehenderit nisi illum consequuntur. Inventore eveniet amet aspernatur!</p>
                    <div className="flex gap-2.5">
                        <img className="h-10" src={assets.facebook_icon} />
                        <img className="h-10" src={assets.twitter_icon} />
                        <img className="h-10" src={assets.linkedin_icon} />
                    </div>
                </div>
                <div className="footer-center flex flex-col gap-3 items-start">
                    <h2 className="font-bold text-xl font-serif text-white">COMPANY</h2>
                    <ul className="flex flex-col gap-2">
                        <li className="hover:text-orange-400 cursor-pointer font-serif">Home</li>
                        <li className="hover:text-orange-400 cursor-pointer font-serif">About us</li>
                        <li className="hover:text-orange-400 cursor-pointer font-serif">Delivery</li>
                        <li className="hover:text-orange-400 cursor-pointer font-serif">Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-right flex flex-col gap-3 items-start">
                    <h2 className="font-bold text-xl font-serif text-white">GET IN TOUCH</h2>
                    <ul className="flex flex-col gap-2">
                        <li className="hover:text-orange-400 cursor-pointer font-serif">+1-212-456-7898</li>
                        <li className="hover:text-orange-400 cursor-pointer font-serif">conttact@tomato.com</li>
                    </ul>
                </div>

            </div>
            <hr className="w-full border-none h-0.5 bg-gray-400 my-4" />
            <p className="footer-copyright font-serif text-sm py-2.5">Copyright 2024 &copy; Tomato.com ~ All rights are reserved</p>
        </div>
    )
}

export default Footer