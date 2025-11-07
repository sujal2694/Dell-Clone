import Image from "next/image"
import { assets } from "../../assets/assets"


const OptionMenu = ({}) => {
  return (

    <div className="mt-20 flex items-center justify-between gap-3 pl-2.5 h-[40px]">
      <div className="flex items-center gap-3 pl-2.5 h-[40px]">

        <div className="ralative group">
          <p className="h-[100%] cursor-pointer align-middle p-2 group text-[16px] font-extralight text-gray-700 hover:text-blue-500 duration-150">Laptops <i className="fa fa-chevron-down transition-transform duration-300 group-hover:rotate-180 text-[12px]"></i></p>
          <div className="hidden group-hover:block absolute left-[1%] w-[250px] mt-2 bg-white shadow-[0_0_5px_1px_#CECECE] rounded-[10px] z-10">
            <div className="w-[250px]">
              <ul className="w-[100%] h-[100%]">
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">View All Laptops</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Dell Laptops</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Dell Pro Laptops</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Inspiron Laptops</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Vostro Laptops</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">XPS Laptops</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Alienware Laptops</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">G Series</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Latitude Laptops</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ralative group">
          <p className="h-[100%] cursor-pointer align-middle p-2 group text-[16px] font-extralight text-gray-700 hover:text-blue-500 duration-150">Desktops <i className="fa fa-chevron-down transition-transform duration-300 group-hover:rotate-180 text-[12px]"></i></p>
          <div className="hidden group-hover:block absolute left-[6%] w-[250px] bg-white mt-2 shadow-[0_0_5px_1px_#CECECE] rounded-[10px] z-10">
            <div className="w-[250px]">
              <ul className="w-[100%] h-[100%]">
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">View All Desktops & All-in-ones</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Dell Desktops</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Dell Pro Desktops</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Inspiron Desktops & All-in-ones</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Alienware Desktops</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Optiplex Desktops & All in one</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Vostro Desktops</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ralative group">
          <p className="h-[100%] cursor-pointer align-middle p-2 group text-[16px] font-extralight text-gray-700 hover:text-blue-500 duration-150">Monitors <i className="fa fa-chevron-down transition-transform duration-300 group-hover:rotate-180 text-[12px]"></i></p>
          <div className="hidden group-hover:block absolute left-[13%] w-[250px] bg-white mt-2 shadow-[0_0_5px_1px_#CECECE] rounded-[10px] z-10">
            <div className="w-[250px]">
              <ul className="w-[100%] h-[100%]">
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">All Monitors</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Dell Monitors</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Dell Pro Monitors</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Dell Ultrasharp Monitors</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Alienware Monitors</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Ultrawide Monitors</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">4K Monitors</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Curved Monitors</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Monitors with Speakers</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Video Conferencing Monitors</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ralative group">
          <p className="h-[100%] cursor-pointer align-middle p-2 group text-[16px] font-extralight text-gray-700 hover:text-blue-500 duration-150">Accessories <i className="fa fa-chevron-down transition-transform duration-300 group-hover:rotate-180 text-[12px]"></i></p>
          <div className="hidden group-hover:block absolute left-[18%] w-[250px] bg-white mt-2 shadow-[0_0_5px_1px_#CECECE] rounded-[10px] z-10">
            <div className="w-[250px]">
              <ul className="w-[100%] h-[100%]">
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Keyboard & Monitor</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Carry case</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Battery, Cables & Adapters</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Speackers & Headphones</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Battery</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ralative group">
          <p className="h-[100%] cursor-pointer align-middle p-2 group text-[16px] font-extralight text-gray-700 hover:text-blue-500 duration-150">Deals <i className="fa fa-chevron-down transition-transform duration-300 group-hover:rotate-180 text-[12px]"></i></p>
          <div className=" hidden group-hover:block absolute left-[24%] w-[250px] bg-white mt-2 shadow-[0_0_5px_1px_#CECECE] rounded-[10px] z-10">
            <div className="w-[250px]">
              <ul className="w-[100%] h-[100%]">
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Top Deals</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Laptop Deals</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Desktop Deals</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Gaming PC Deals</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Monitor Deals</li>
                <li className="w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200">Computer Accessories Deals</li>
                <li className="flex items-center justify-between w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200"><p>Business Deals</p><i className="fa fa-chevron-right"></i></li>
                <li className="flex items-center justify-between w-[100%] p-2.5 text-[16px] text-gray-600 hover:bg-gray-200"><p>Clearance Deals</p><i className="fa fa-star"></i></li>              </ul>
            </div>
          </div>
        </div>

        <p className="h-[100%] cursor-pointer align-middle p-2 text-[16px] font-extralight text-gray-700 hover:text-blue-500 duration-150 letter">Support</p>
        <p className="h-[100%] cursor-pointer align-middle p-2 text-[16px] font-extralight text-gray-700 hover:text-blue-500 duration-150 letter">Online Exclusive</p>
        <p className="h-[100%] cursor-pointer align-middle p-2 text-[16px] font-extralight text-gray-700 hover:text-blue-500 duration-150 letter">Track Orders</p>
      </div>

      <div className="px-4 flex items-center gap-2.5 h-[100%]">
        <div className="flex items-end flex-col">
          <p className="text-[20px]">Let us help decide!</p>
          <p className="text-blue-500">Call our experts</p>
        </div>
        <Image src={assets.support_img} alt="support"></Image>
      </div>
    </div>
  )
}

export default OptionMenu