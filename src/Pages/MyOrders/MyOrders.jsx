import { useContext, useEffect, useState } from "react"
import { StoreContext } from "../../Context/StoreContext"
import axios from "axios";
import {assets} from '../../../assets/frontend_assets/assets.js'

function MyOrders(){

    const {token,url} = useContext(StoreContext);
    const [data,setData] = useState([]);

    async function getOrdersData(){
        const response = await axios.post(`${url}/api/order/userorders`,{},{headers:{token}});
        if(response?.data?.success){
            console.log(response?.data?.orders)
            setData(response?.data?.orders)
        }
    }

    useEffect(()=>{
        getOrdersData()
    },[token])

    return(
        <div className="my-12">
            <h2>My Orders</h2>
            <div className="container flex flex-col gap-5 mt-6">
                {data.map((order,index)=>{
                    return (
                        <div key={index} className="grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-7 text-sm p-2.5 text-[#454545] border-2 border-orange-200">
                            <img className="w-12" src={assets.parcel_icon} alt="" />
                            <p className="font-sans">{order.items.map((item,idx)=>{
                                if(idx === order.items.length-1){
                                  return item.name + " x " + item.quantity
                                }

                                else{
                                    return item.name + " x " + item.quantity + ", "   
                                }

                            })}</p>
                            <p>${order.amount}</p>
                            <p>items: {order.items.length}</p>
                            <p><span className="text-orange-600">&#x25cf;</span><b className="font-medium text-[#454545] ml-0.5">{order.status}</b></p>
                            <button className="bg-[#ffe1e1] py-3 rounded-sm cursor-pointer text-[#454545]">Track order</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyOrders