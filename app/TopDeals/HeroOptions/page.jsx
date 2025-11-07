"use client"
import { useContext, useState } from "react"
import { StoreContext } from "../../context/StoreContext"
import Image from "next/image";
import { assets } from "@/app/assets/assets";

const HeroOptions = ({}) => {
  const {setCategory} = useContext(StoreContext);
  const [active, setActive] = useState("");
  return (
    <div className="p-[40px] flex items-center justify-center w-[100%] mx-[auto]">
        <ul className="flex items-center justify-around w-[100%]">
            <li onClick={()=>{setCategory('deals'),setActive('deals')}} className={active==='deals'?"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-blue-700 gap-3 border-b-2 border-blue-800":"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-gray-800 gap-3 "}><i className='group-hover:text-blue-500 my-3 text-[30px] font-light bx  bx-discount'></i> <p className="group-hover:text-blue-500 text-[14px] tracking-wider mb-3">Top Deals</p></li>
            <li onClick={()=>{setCategory('laptop'),setActive('laptop')}} className={active==='laptop'?"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-blue-700 gap-3 border-b-2 border-blue-800":"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-gray-800 gap-3 "}><i className="group-hover:text-blue-500 my-3 text-[30px] font-light fa fa-laptop"></i><p className="group-hover:text-blue-500 text-[14px] tracking-wider mb-3">Laptops Deals</p></li>
            <li onClick={()=>{setCategory('desktop'),setActive('desktop')}} className={active==='desktop'?"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-blue-700 gap-3 border-b-2 border-blue-800":"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-gray-800 gap-3 "}><i className="group-hover:text-blue-500 my-3 text-[30px] font-light fa fa-computer"></i><p className="group-hover:text-blue-500 text-[14px] tracking-wider mb-3">Desktop Deals</p></li>
            <li onClick={()=>{setCategory('gamingPC'),setActive('gamingPC')}} className={active==='gamingPC'?"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-blue-700 gap-3 border-b-2 border-blue-800":"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-gray-800 gap-3 "}><Image src={assets.gaming_pc} alt="gaming pc" className="group-hover:text-blue-500 my-3 text-[30px] font-light fa fa-computer"></Image><p className="group-hover:text-blue-500 text-[14px] tracking-wider mb-3">Gaming PC Deals</p></li>
            <li onClick={()=>{setCategory('monitor'),setActive('monitor')}} className={active==='monitor'?"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-blue-700 gap-3 border-b-2 border-blue-800":"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-gray-800 gap-3 "}><i className="group-hover:text-blue-500 my-3 text-[30px] font-light fa fa-desktop"></i><p className="group-hover:text-blue-500 text-[14px] tracking-wider mb-3">Monitor Deals</p></li>
            <li onClick={()=>{setCategory('accessories'),setActive('accessories')}} className={active==='accessories'?"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-blue-700 gap-3 border-b-2 border-blue-800":"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-gray-800 gap-3 "}><i className="group-hover:text-blue-500 my-3 text-[30px] font-light fa fa-mouse"></i><p className="group-hover:text-blue-500 text-[14px] tracking-wider mb-3">Computer Accessories Deals</p></li>
            <li onClick={()=>{setCategory('business'),setActive('business')}} className={active==='business'?"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-blue-700 gap-3 border-b-2 border-blue-800":"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-gray-800 gap-3 "}><i className="group-hover:text-blue-500 my-3 text-[30px] font-light fa fa-suitcase"></i><p className="group-hover:text-blue-500 text-[14px] tracking-wider mb-3">Business Deals</p></li>
            <li onClick={()=>{setCategory('clearance'),setActive('clearance')}} className={active==='clearance'?"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-blue-700 gap-3 border-b-2 border-blue-800":"w-[400px] cursor-pointer group flex items-center flex-col font-medium text-gray-800 gap-3 "}><Image src={assets.cleararance_icon} alt="clearance icon" className="group-hover:text-blue-500 my-3 text-[30px] font-light fa fa-mouse"></Image><p className="group-hover:text-blue-500 text-[14px] tracking-wider mb-3">Clearance Deals</p></li>
        </ul>
    </div>
  )
}

export default HeroOptions