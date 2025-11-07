"use client"
import { assets } from "@/app/assets/assets"
import { StoreContext } from "@/app/context/StoreContext"
import Image from "next/image"
import { useContext, useState } from "react"


const Items = ({ }) => {
  const { Products, topDealProducts } = useContext(StoreContext);
  const [layout, setLayout] = useState(false);

  const LayoutHandler = () => {
    setLayout(!layout)
  }
  return <div className="w-full mb-10">
    <div>
      <h1 className="text-3xl font-semibold">Feature Products</h1>
    </div>

    <div className="w-[100%] flex items-center gap-5 p-5 ">
      {topDealProducts.map((item, index) => {
        return (
          <div key={index} className="min-w-[330px] bg-blue-500/10 p-5 border-1 border-gray-400/10 rounded-[10px] shadow-md flex items-center flex-col">
            <Image className="my-3 mt-3" src={item.image} alt={item.name}></Image>
            <p className="my-4 text-[14px] font-semibold">{item.name}</p>
            <span className="my-7 text-[16px] font-semibold">{item.price}</span>
            <button className="w-full h-[40px] text-[16px] text-white hover:text-blue-700 bg-blue-600/80 hover:bg-white border-1 border-transparent hover:border-blue-700 rounded-[5px] font-semibold cursor-pointer">Buy Now</button>
          </div>
        )
      })}
    </div>

    <div className="flex items-center justify-between px-5 mt-10">
      <div>
        <p className="text-[16px] text-gray-600/50">9 Items</p>
      </div>
      <div className="flex items-center">
        <p className="text-[16px] text-gray-600/50">Sort by <select className="border-1 border-gray-500/30 rounded-[5px] p-2 mr-2">
          <option className="text-[18px]" value="Position">Position</option>
          <option className="text-[18px]" value="Lowest Price">Lowest Price</option>
          <option className="text-[18px]" value="Highest Price">Highest Price</option>
        </select></p>
        <div className="flex items-center gap-4">
          <i onClick={LayoutHandler} className="bx bx-grid text-[30px] text-gray-700/50 hover:text-blue-500" style={{color: `${layout===false ? 'blue' : ''}`}}></i>
          <i onClick={LayoutHandler} className="bx bx-rows text-[30px] text-gray-700/50 hover:text-blue-500" style={{color: `${layout===true ? 'blue' : ''}`}}></i>
        </div>
      </div>
    </div>

    {layout === true
      ? <div className="w-[100%] flex items-center gap-2.5 flex-col mt-2">
        {Products.map((item, index) => {
          return (
            <div key={index} className="w-full flex items-start gap-5 shadow-[0_0_2px_1px_#e2e2e2] p-5 rounded-[5px]">
              <div className="w-[33%] flex items-center flex-col">
                <div className="w-full flex items-end">
                  <i className="bx bx-heart"></i>
                </div>
                <Image className="w-[250px]" src={item.image} alt={item.name}></Image>
              </div>

              <div className="flex items-start flex-col w-[40%]">
                <h1 className="text-2xl font-semibold">{item.name}</h1>
                <div className="flex items-center gap-1.5 text-[14px]">
                  <ul className="flex items-center gap-1 text-blue-500">
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                  </ul>
                  {item.ratings}
                </div>

                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Image className="w-[35px]" src={assets.tech_icon_1} alt="icons"></Image>
                  <h3 className="flex items-start flex-col">
                    <p className="text-[13px] text-gray-600">Processor</p>
                    <p className="text-[13px] text-gray-600">{item.processor}</p>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Image className="w-[35px]" src={assets.tech_icon_3} alt="icons"></Image>
                  <h3>
                    <p className="text-[13px] text-gray-600">Operating System</p>
                    <p className="text-[13px] text-gray-600">{item.operating_system}</p>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Image className="w-[35px]" src={assets.video_card} alt="icons"></Image>
                  <h3>
                    <p className="text-[13px] text-gray-600">Video Card</p>
                    <p className="text-[13px] text-gray-600">{item.video_card}</p>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Image className="w-[35px]" src={assets.tech_icon_8} alt="icons"></Image>
                  <h3>
                    <p className="text-[13px] text-gray-600">Memory</p>
                    <p className="text-[13px] text-gray-600">{item.memory}</p>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Image className="w-[35px]" src={assets.tech_icon_2} alt="icons"></Image>
                  <h3>
                    <p className="text-[13px] text-gray-600">Storage</p>
                    <p className="text-[13px] text-gray-600">{item.storage}</p>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Image className="w-[35px]" src={assets.tech_icon_5} alt="icons"></Image>
                  <h3>
                    <p className="text-[13px] text-gray-600">Display</p>
                    <p className="text-[13px] text-gray-600">{item.display}</p>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Image className="w-[35px]" src={assets.color_icon} alt="icons"></Image>
                  <h3>
                    <p className="text-[13px] text-gray-600">Color</p>
                    <p className="text-[13px] text-gray-600">{item.color}</p>
                  </h3>
                </div>
                <span className="text-[15px] text-blue-500 flex items-center gap-1.5"><i className="bx bx-plus"></i>View More</span>
              </div>

              <div className="w-[45%]">
                <div>
                  <p className="text-2xl font-semibold">{item.price}</p>
                  <span className="text-[14px] text-gray-400">Inclusive of all taxes.</span>
                </div>

                <div className="flex items-start flex-col mt-5 mb-4">
                  <span className="text-[16px] text-gray-800">No cost EMI available. See options at checkout.</span>
                  <div className=" flex items-center justify-center gap-9 mt-1">
                    <button className="text-[16px] py-1.5 rounded-[10px] text-blue-500 hover:text-white bg-white hover:bg-blue-500 border-1 border-blue-500 w-[200px] flex items-center justify-center cursor-pointer">Compare</button>
                    <button className="text-[16px] py-1.5 rounded-[10px] text-white hover:text-blue-500 bg-blue-500 hover:bg-white border-1 border-blue-500 w-[200px] flex items-center justify-center cursor-pointer">Buy Now</button>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-gray-400 text-[14px]">
                  <i className="bx bx-info-octagon"></i>
                  <p>{item.order_code}</p>
                </div>

                <div>
                  <p className="text-[18px] font-semibold mt-4">Special Offers</p>
                  {item.special_offers.map((line, index) => {
                    return (
                      <ul key={index} className="pl-3 text-[13px] mt-1.5">
                        <li className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>{line}</li>
                      </ul>
                    )
                  })}
                </div>
                <p className="flex items-center text-blue-500 text-[14px] gap-1.5 mt-2"><i className="bx bx-plus"></i>View More</p>
              </div>

            </div>
          )
        })}
      </div>
      : <div className="w-[100%] flex items-center justify-center gap-3 flex-wrap mt-2">
        {Products.map((item, index) => {
          return (
            <div key={index} className="w-[32%] h-[115vh] flex items-center flex-col gap-5 shadow-[0_0_2px_1px_#e2e2e2] p-5 rounded-[5px]">
              <div className="w-[100%] flex items-center flex-col">
                <div className="w-full flex items-end">
                  <i className="bx bx-heart"></i>
                </div>
                <Image className="w-[80%]" src={item.image} alt={item.name}></Image>
              </div>

              <div className="flex items-start flex-col w-[100%]">
                <h1 className="text-2xl font-semibold">{item.name}</h1>
                <div className="flex items-center gap-1.5 text-[14px]">
                  <ul className="flex items-center gap-1 text-blue-500">
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                  </ul>
                  {item.ratings}
                </div>

                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Image className="w-[35px]" src={assets.tech_icon_1} alt="icons"></Image>
                  <h3 className="flex items-start flex-col">
                    <p className="text-[13px] text-gray-600">Processor</p>
                    <p className="text-[13px] text-gray-600">{item.processor}</p>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Image className="w-[35px]" src={assets.tech_icon_3} alt="icons"></Image>
                  <h3>
                    <p className="text-[13px] text-gray-600">Operating System</p>
                    <p className="text-[13px] text-gray-600">{item.operating_system}</p>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Image className="w-[35px]" src={assets.video_card} alt="icons"></Image>
                  <h3>
                    <p className="text-[13px] text-gray-600">Video Card</p>
                    <p className="text-[13px] text-gray-600">{item.video_card}</p>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Image className="w-[35px]" src={assets.tech_icon_8} alt="icons"></Image>
                  <h3>
                    <p className="text-[13px] text-gray-600">Memory</p>
                    <p className="text-[13px] text-gray-600">{item.memory}</p>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Image className="w-[35px]" src={assets.tech_icon_2} alt="icons"></Image>
                  <h3>
                    <p className="text-[13px] text-gray-600">Storage</p>
                    <p className="text-[13px] text-gray-600">{item.storage}</p>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Image className="w-[35px]" src={assets.tech_icon_5} alt="icons"></Image>
                  <h3>
                    <p className="text-[13px] text-gray-600">Display</p>
                    <p className="text-[13px] text-gray-600">{item.display}</p>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Image className="w-[35px]" src={assets.color_icon} alt="icons"></Image>
                  <h3>
                    <p className="text-[13px] text-gray-600">Color</p>
                    <p className="text-[13px] text-gray-600">{item.color}</p>
                  </h3>
                </div>
                <span className="text-[15px] text-blue-500 flex items-center gap-1.5"><i className="bx bx-plus"></i>View More</span>
              </div>

              <div className="w-[100%]">
                <div>
                  <p className="text-2xl font-semibold">{item.price}</p>
                  <span className="text-[14px] text-gray-400">Inclusive of all taxes.</span>
                </div>

                <div className="flex items-start flex-col mt-5 mb-4">
                  <span className="text-[16px] text-gray-800">No cost EMI available. See options at checkout.</span>
                  <div className=" flex items-center justify-center gap-9 mt-1">
                    <button className="text-[16px] py-1.5 rounded-[10px] text-blue-500 hover:text-white bg-white hover:bg-blue-500 border-1 border-blue-500 w-[150px] flex items-center justify-center cursor-pointer">Compare</button>
                    <button className="text-[16px] py-1.5 rounded-[10px] text-white hover:text-blue-500 bg-blue-500 hover:bg-white border-1 border-blue-500 w-[150px] flex items-center justify-center cursor-pointer">Buy Now</button>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-gray-400 text-[14px]">
                  <i className="bx bx-info-octagon"></i>
                  <p>{item.order_code}</p>
                </div>

                <div>
                  <p className="text-[18px] font-semibold mt-4">Special Offers</p>
                  {item.special_offers.map((line, index) => {
                    return (
                      <ul key={index} className="pl-3 text-[13px] mt-1.5">
                        <li className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>{line}</li>
                      </ul>
                    )
                  })}
                </div>
                <p className="flex items-center text-blue-500 text-[14px] gap-1.5 mt-2"><i className="bx bx-plus"></i>View More</p>
              </div>

            </div>
          )
        })}
      </div>
    }



  </div>
}

export default Items