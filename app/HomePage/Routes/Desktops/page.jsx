"use client"
import { useContext } from "react"
import { StoreContext } from "../../../context/StoreContext"
import Image from "next/image"

const Desktops = ({ }) => {
    const { Desktops } = useContext(StoreContext)
    return (
            <div className="w-[90vw] m-[auto] my-10 p-8 flex items-center justify-around flex-wrap">
                {Desktops.map((item, index) => {
                    if (index === 6) {
                        return (
                            <div key={index} className=" group min-h-[330px] w-[820px] p-[25px] mb-[18px] flex items-center justify-center flex-col bg-blue-50 rounded-[10px]">
                                <Image className="bg-transparent max-w-[250px] max-h-[200px] h-[auto] border-0 mb-3 hover:scale-[1.1] duration-300" src={item.image} alt={item.name}></Image>
                                <p className="w-[100%] text-center font-semibold text-gray-900 tracking-wider">{item.name}</p>
                                <div className="relative w-[100%] h-[30px] mt-5 text-center">
                                    <button className="cursor-pointer px-3 py-2 bg-blue-400 hover:bg-white text-white hover:text-blue-500 border-1 border-transparent hover:border-blue-500 font-semibold rounded-[10px] absolute bottom-[-80%] left-[43%] z-[-3] group-hover:z-1 group-hover:bottom-[0] duration-300">Buy Now</button>
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={index} className=" group min-h-[330px] w-[400px] p-[25px] mb-[18px] flex items-center justify-center flex-col bg-blue-50 rounded-[10px]">
                                <Image className="bg-transparent max-w-[250px] max-h-[200px] h-[auto] border-0 mb-3 hover:scale-[1.1] duration-300" src={item.image} alt={item.name}></Image>
                                <p className="w-[100%] text-center font-semibold text-gray-900 tracking-wider">{item.name}</p>
                                <div className="relative w-[100%] h-[30px] mt-5 text-center">
                                    <button className="cursor-pointer px-3 py-2 bg-blue-400 hover:bg-white text-white hover:text-blue-500 border-1 border-transparent hover:border-blue-500 font-semibold rounded-[10px] absolute bottom-[-80%] left-[35%] z-[-3] group-hover:z-1 group-hover:bottom-[0] duration-300">Buy Now</button>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
    )
}

export default Desktops