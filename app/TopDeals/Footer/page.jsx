"use client"
import { StoreContext } from "@/app/context/StoreContext"
import Image from "next/image";
import { useContext } from "react"


const Footer = ({ }) => {
    const {FootOptions} = useContext(StoreContext);
    return <div>
        <div>
            <div className="flex items-center justify-center flex-col w-[100vw] bg-blue-700/80 py-[30px]">
                <div className="text-white">
                    <span className="font-semibold text-[18px] opacity-80 uppercase">contact us</span>
                    <h1 className="text-2xl my-3 font-semibold">Have Questions That We Can Help With?</h1>
                    <p className="font-light opacity-85">Call 1800-4002 or Click to Chat</p>
                </div>
            </div>

            <div className="flex items-center justify-center w-[100vw]">
                {FootOptions.map((item,index)=>{
                    return(
                        <div key={index} className="border-1 border-gray-400/30 w-[50%] h-[120px] flex items-center justify-center flex-col gap-1 bg-gray-400/20 hover:bg-gray-100/40 cursor-pointer">
                            <Image src={item.image} alt="image"></Image>
                            <h1 className="text-blue-500">{item.title}</h1>
                            <p className="text-[12px]">{item.desc}</p>
                        </div>
                    )
                })}
            </div>

            <div className="flex items-center justify-center gap-[20px] py-3 text-[16px] text-gray-800">
                <p>&copy; 2025 Dell</p>
                <p>About Dell Technologies</p>
                <p> About STPL</p>
                <p>Terms of Use</p>
                <p>Returns, Refunds & Cancellations</p>
                <p>privacy Statement</p>
                <p>feedback</p>
            </div>
        </div>
    </div>
}

export default Footer