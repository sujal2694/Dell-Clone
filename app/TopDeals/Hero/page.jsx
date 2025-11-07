import { assets } from "@/app/assets/assets"
import Image from "next/image"

const Hero = ({ }) => {
    return (
        <div className="relative w-[100vw]">
            <div className="absolute top-[15%] left-[5%] flex items-start flex-col">
                <span className="text-xl font-extralight tracking-wide mt-3">Festive offers</span>
                <h1 className="text-4xl font-light my-5">Powerful performance. Great celebration.</h1>
                <p className="font-light text-xl">Do more this festive season — with Cashback and No Cost EMI offers*.</p>
            </div>
            <Image src={assets.Top_Deals_hero} alt="hero image"></Image>
        </div>
    )
}

export default Hero