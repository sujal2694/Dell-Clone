import Image from "next/image"
import { assets } from "../../assets/assets"
import Link from "next/link"

const Hero = ({}) => {
  return (
    <div className="w-[100vw] flex items-center justify-center p-[60px] h-[400] bg-linear-to-r from-cyan-600 to-sky-900 mt-2">
      <div className="w-[90%] mx-[auto] flex items-center">
        <div className="flex flex-col items-start w-[60%] gap-3">
          <span className="uppercase tracking-widest font-bold text-xl text-white opacity-30 mb-3">vostro laptops</span>
          <h1 className="text-3xl text-white font-bold mb-3">Any Task, Any Place</h1>
          <p className="text-white text-[20px] font-medium opacity-75 mb-3">Tackle all your to-dos from any location with built in security and reliability support</p>
          <Link className="w-[100%]" href='/TopDeals'><button className="border-none cursor-pointer rounded-[15px] bg-white text-[18px] py-2 w-[90%] text-cyan-800 font-bold tracking-wider">View Laptops</button></Link>
        </div>
        <Image className="w-[40%]" src={assets.hero_img} alt="hero image"></Image>
      </div>
    </div>
  )
}

export default Hero