"use client"
import { StoreContext } from "@/app/context/StoreContext"
import { useContext } from "react"
import Image from "next/image";

const Monitors = ({ }) => {
    const { MonitorsLeft, MonitorsRight } = useContext(StoreContext);
    return (
        <div className="w-[95vw] m-[auto] my-10 p-8 flex items-center justify-between flex-wrap">
            <div className=" flex items-center flex-wrap justify-around gap-1 w-[50%] ">
                {MonitorsLeft.map((item, index) => {
                    return (
                        <div key={index} className=" group min-h-[330px] w-[420px] p-[25px] mb-[18px] flex items-center justify-center flex-col bg-blue-50 rounded-[10px]">
                            <Image className="bg-transparent max-w-[250px] max-h-[200px] h-[auto] border-0 mb-3 hover:scale-[1.1] duration-300" src={item.image} alt={item.name}></Image>
                            <p className="w-[100%] text-center font-semibold text-gray-900 tracking-wider">{item.name}</p>
                            <div className="relative w-[100%] h-[30px] mt-5 text-center">
                                <button className="cursor-pointer px-3 py-2 bg-blue-400 hover:bg-white text-white hover:text-blue-500 border-1 border-transparent hover:border-blue-500 font-semibold rounded-[10px] absolute bottom-[-80%] left-[35%] z-[-3] group-hover:z-1 group-hover:bottom-[0] duration-300">Buy Now</button>
                            </div>
                        </div>
                    )
                })}
                <div className=" w-[98%] h-[60px] bg-gradient-to-r from-blue-900 to-blue-500 rounded-[6px] flex items-center gap-2 mt-[-10px] pl-[10px] text-white ">
                    <i className="fa fa-desktop text-3xl"></i>
                    <div>
                        <p className="font-semibold text-[20px] tracking-wide mb-[-6px]">View All Monitors</p>
                        <span className=" text-gray-400 font-semibold tracking-wide text-[14px] ">Wide variety</span>
                    </div>
                </div>
            </div>

            <div className=" flex items-center flex-wrap justify-around gap-2 w-[50%] ">
                {MonitorsRight.map((item, index) => {
                    return (
                        <div key={index} className=" group min-h-[360px] w-[420px] p-[25px] mb-[18px] flex items-center justify-center flex-col bg-blue-50 rounded-[10px]">
                            <Image className="bg-transparent max-w-[250px] max-h-[200px] h-[auto] border-0 mb-3 hover:scale-[1.1] duration-300" src={item.image} alt={item.name}></Image>
                            <p className="w-[100%] text-center font-semibold text-gray-900 tracking-wider">{item.name}</p>
                            <div className="relative w-[100%] h-[30px] mt-5 text-center">
                                <button className="cursor-pointer px-3 py-2 bg-blue-400 hover:bg-white text-white hover:text-blue-500 border-1 border-transparent hover:border-blue-500 font-semibold rounded-[10px] absolute bottom-[-80%] left-[35%] z-[-3] group-hover:z-1 group-hover:bottom-[0] duration-300">Buy Now</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Monitors