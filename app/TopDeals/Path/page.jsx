import { assets } from "@/app/assets/assets"
import Image from "next/image"
import Link from "next/link"


const Path = ({ }) => {
    return (
        <div className="flex items-center justify-between border-b-1 border-gray-300 p-1">
            <div className="flex items-center gap-3">
                <Link className="text-gray-500 hover:underline" href="/"><p>Home</p></Link>
                <i className="fa fa-chevron-right text-gray-500"></i>
                <p>Top Deals</p>
            </div>
            <div className="flex items-center gap-3">
                <Image className="w-[200px]" src={assets.path_img_1} alt="path"></Image>
                <p className="flex items-end flex-col text-[14px]">Intel® Core™ Processors <span className="text-blue-500">Learn More about Intel</span></p>
                <Image className="w-[120px]" src={assets.path_img_2} alt="path"></Image>
            </div>
        </div>
    )
}

export default Path