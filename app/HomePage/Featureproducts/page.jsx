"use client"
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import Image from "next/image";


const Featureproducts = ({}) => {
    const { feature_products } = useContext(StoreContext);
  return (
    <div className="my-[100px]">
            <div className="text-center mb-10">
                <p className="text-[16px] text-gray-500 opacity-70 uppercase mb-3">what's best</p>
                <h1 className="text-3xl font-semibold text-black">Featured Products</h1>
            </div>
            <div className="flex items-center justify-center gap-[20px] px-5 w-[95%] m-[auto]">
                {feature_products.map((item, index) => {
                    if (index === 0) { 
                        return (
                            <div key={index} className="bg-blue-800 shadow-md flex items-start flex-col p-2 rounded-[12px] min-w-[400px]">
                                <Image className="w-[100%]" src={item.image} alt={item.name}></Image>
                                <span className="font-sans font-bold tracking-wider text-[16px] opacity-60 text-white uppercase my-3">{item.subName}</span>
                                <p className="text-white mb-8 text-2xl font-semibold">{item.name}</p>
                                <p className="text-gray-200 opacity-70 text-[17px]">{item.desc} <span className="text-purple-400 font-semibold">Learn More</span></p>
                                <button className="cursor-pointer w-[100%] bg-purple-500 hover:bg-white text-white hover:text-purple-500 rounded-2xl h-[50px] font-semibold text-[18px] mt-5 duration-100 group">{item.btnText} <i className="fa fa-arrow-right group-hover:text-white"></i></button>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className="bg-white shadow-md flex items-start flex-col p-2 rounded-[12px] min-w-[400px]">
                                <Image className="w-[100%]" src={item.image} alt={item.name}></Image>
                                <span className="font-bold tracking-wider text-[16px] opacity-70 text-gray-600 uppercase my-3">{item.subName}</span>
                                <p className="text-black mb-10 text-2xl">{item.name}</p>
                                <p className="text-gray-600 opacity-90 text-[17px]">{item.desc} <span className="text-blue-400 font-semibold">Learn More</span></p>
                                <button className="cursor-pointer w-[100%] border-1 border-e-transparent hover:border-blue-600 bg-blue-500 hover:bg-white text-white hover:text-blue-500 rounded-2xl h-[50px] font-semibold text-[18px] mt-5 duration-100 group">{item.btnText} <i className="fa fa-arrow-right group-hover:text-white"></i></button>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
  )
}

export default Featureproducts