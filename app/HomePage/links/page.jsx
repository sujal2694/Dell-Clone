"use client"
import Image from "next/image"
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

const Links = ({}) => {
    const { links } = useContext(StoreContext);
  return (
        <div>
            <div className="w-[100%] text-center">
                <p className="uppercase text-[15px] text-gray-500">latest from dell</p>
                <h1 className="text-3xl text-black mt-1.5 font-semibold">What's happening</h1>
            </div>
            <div className="flex items-center gap-[20px] my-[60px] p-[30px] flex-wrap">
                {links.map((item, index) => {
                    if (index === 2) {
                        return (
                            <div key={index} className="min-w-[450px] shadow-[0_0_5px_1px_#e2e2e2] p-[10px] rounded-[12px]">
                                <Image className="w-[100%]" src={item.image} alt="image"></Image>
                                <p className="mt-2 mb-[20px] font-semibold">{item.name}</p>
                                <button className="text-blue-600 cursor-pointer mt-[30px] text-[18px]">Read The Report <i className="text-[12px] mt-5 fa fa-arrow-right"></i></button>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className="min-w-[450px] shadow-[0_0_5px_1px_#e2e2e2] p-[10px] rounded-[12px]">
                                <Image className="w-[100%]" src={item.image} alt="image"></Image>
                                <p className="mt-2 mb-[20px] font-semibold">{item.name}</p>
                                <button className="text-blue-600 cursor-pointer mt-[30px] text-[18px]">Explore <i className="text-[12px] mt-5 fa fa-arrow-right"></i></button>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
  )
}

export default Links