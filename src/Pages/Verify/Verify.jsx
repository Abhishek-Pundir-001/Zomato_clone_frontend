import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";


function Verify() {

    const [searchParams, setSearchParams] = useSearchParams();
    const { url } = useContext(StoreContext)
    const navigate = useNavigate()

    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId")


    async function verifyPayment() {

        try {
            const response = await axios.post(`${url}/api/order/verify`, { success, orderId });
            if (response?.data?.success) {
                navigate("/myorders")
            }

            else {
                navigate("")
            }

        }
        catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[])


    return (
        <div className="h-[60vh] flex justify-center items-center">
            <div className="h-24 w-24 p-5 border-8 border-[#cacaca] border-t-orange-500 animate-spin rounded-full"></div>
        </div>
    )
}

export default Verify;