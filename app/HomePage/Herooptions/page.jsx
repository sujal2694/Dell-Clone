"use client"
import { useContext, useState } from "react"
import { StoreContext } from "../../context/StoreContext"

const HeroOptions = ({}) => {
  const {setCategory} = useContext(StoreContext);
  const [active, setActive] = useState("");
  return (
    <div className="p-[60px] my-10 flex items-center justify-center w-[90%] mx-[auto]">
        <ul className="flex items-center justify-between w-[100%]">
            <li onClick={()=>{setCategory('laptop'),setActive('laptop')}} className={active==='laptop'?"w-[200px] cursor-pointer group flex items-center flex-col font-medium text-blue-700 gap-3 border-b-2 border-blue-800":"w-[200px] cursor-pointer group flex items-center flex-col font-medium text-gray-800 gap-3 hover:bg-gray-200 border-b-2 border-transparent hover:border-blue-400 duration-200"}><i className="group-hover:text-blue-500 my-3 text-[30px] font-light fa fa-laptop"></i><p className="group-hover:text-blue-500 text-[14px] tracking-wider mb-3">Laptops</p></li>
            <li onClick={()=>{setCategory('desktop'),setActive('desktop')}} className={active==='desktop'?"w-[200px] cursor-pointer group flex items-center flex-col font-medium text-blue-700 gap-3 border-b-2 border-blue-800":"w-[200px] cursor-pointer group flex items-center flex-col font-medium text-gray-800 gap-3 hover:bg-gray-200 border-b-2 border-transparent hover:border-blue-400 duration-200"}><i className="group-hover:text-blue-500 my-3 text-[30px] font-light fa fa-computer"></i><p className="group-hover:text-blue-500 text-[14px] tracking-wider mb-3">Desktop</p></li>
            <li onClick={()=>{setCategory('monitor'),setActive('monitor')}} className={active==='monitor'?"w-[200px] cursor-pointer group flex items-center flex-col font-medium text-blue-700 gap-3 border-b-2 border-blue-800":"w-[200px] cursor-pointer group flex items-center flex-col font-medium text-gray-800 gap-3 hover:bg-gray-200 border-b-2 border-transparent hover:border-blue-400 duration-200"}><i className="group-hover:text-blue-500 my-3 text-[30px] font-light fa fa-desktop"></i><p className="group-hover:text-blue-500 text-[14px] tracking-wider mb-3">Monitor</p></li>
            <li onClick={()=>{setCategory('accessories'),setActive('accessories')}} className={active==='accessories'?"w-[200px] cursor-pointer group flex items-center flex-col font-medium text-blue-700 gap-3 border-b-2 border-blue-800":"w-[200px] cursor-pointer group flex items-center flex-col font-medium text-gray-800 gap-3 hover:bg-gray-200 border-b-2 border-transparent hover:border-blue-400 duration-200"}><i className="group-hover:text-blue-500 my-3 text-[30px] font-light fa fa-mouse"></i><p className="group-hover:text-blue-500 text-[14px] tracking-wider mb-3">Accessories</p></li>
            <li onClick={()=>{setCategory('deals'),setActive('deals')}} className={active==='deals'?"w-[200px] cursor-pointer group flex items-center flex-col font-medium text-blue-700 gap-3 border-b-2 border-blue-800":"w-[200px] cursor-pointer group flex items-center flex-col font-medium text-gray-800 gap-3 hover:bg-gray-200 border-b-2 border-transparent hover:border-blue-400 duration-200"}><i className='group-hover:text-blue-500 my-3 text-[30px] font-light bx  bx-discount'></i> <p className="group-hover:text-blue-500 text-[14px] tracking-wider mb-3">Deals</p></li>
        </ul>
    </div>
  )
}

export default HeroOptions