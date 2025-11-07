import { assets } from "../../assets/assets"
import Image from "next/image"

const Banner = ({}) => {
  return (
    <div className="relative w-[100vw] mb-[100px]">
            <div>
                <Image className="w-[100%]" src={assets.bottom_banner} alt="banner"></Image>
            </div>
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-gray-950/40 grid place-items-center">
                <div className="text-center">
                    <span className="uppercase mb-2.5 opacity-70 text-white text-2xl font-semibold tracking-widest">dell 14 laptops</span>
                    <h1 className="text-white font-bold text-4xl">Sleek, Stylish, AI-powered</h1>
                    <p className="text-white font-bold text-2xl mt-6 opacity-75">Transform you day-to-day in style with inspiring AI-<br />powered experience.</p>
                    <button className="mt-6 text-white text-xl">Shop Now <i className="fa fa-arrow-right text-[16px]"></i></button>
                </div>
            </div>
        </div>
  )
}

export default Banner