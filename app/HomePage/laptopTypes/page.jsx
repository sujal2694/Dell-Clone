import Image from "next/image"
import { assets } from "../../assets/assets"

const LaptopTypes = ({}) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-[300px] flex-row-reverse w-[100vw] bg-gradient-to-r from-blue-400 to-blue-950 p-[50px]">
        <div className="w-[30%] ">
          <Image className="w-[100%]" src={assets.about_img_1} alt="student"></Image>
        </div>
        <div className="w-[60%] text-white ">
          <span className="uppercase text-[16px] opacity-60">back to college</span>
          <h1 className=" font-semibold text-3xl my-3">Exclusive Discounts for Students</h1>
          <p className="opacity-65 w-[65%] text-[17px] tracking-wide mb-4">Unlock special deals for students, parents, and education staff with exclusive vouchers. Please reach out to Student.Purchase@Dell.com for any issues with accessing your exclusive voucher.</p>
          <button className="bg-white cursor-pointer text-blue-500 text-center w-[100%] py-3 rounded-[10px] text-[16px] font-semibold">Get Your Coupons</button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[300px] flex-row w-[100vw] p-[50px]">
        <div className="w-[30%] ">
          <Image className="w-[100%]" src={assets.about_img_2} alt="student"></Image>
        </div>
        <div className="w-[60%] text-black ">
          <span className="uppercase text-[16px] opacity-60">employee discount</span>
          <h1 className=" font-semibold text-3xl my-3">Corporate Employee Purchase Program</h1>
          <p className="opacity-65 w-[65%] text-[17px] tracking-wide mb-4">As an employee of participating companies & organizations can get attractive discounts on select laptops*, desktops* & accessories. If you experience any issues along this process please contact: enquiry.cepp@Dell.com</p>
          <p className="opacity-65 w-[65%] text-[17px] tracking-wide mb-1 mt-5">On top of your coupon discount, get the below offers</p>
          <ul className="mb-5 pl-3">
            <li className="opacity-65 w-[65%] text-[17px] tracking-wide mb-1 flex items-center gap-3"><div className="rounded-[50%] h-2 w-2 bg-gray-800"></div>No Cost EMI available on select bank credit cards*</li>
            <li className="opacity-65 w-[65%] text-[17px] tracking-wide mb-1 flex items-center gap-3"><div className="rounded-[50%] h-2 w-2 bg-gray-800"></div>Attractive Hard goodie offers*</li>
          </ul>
          <button className="text-white cursor-pointer bg-blue-500 text-center w-[100%] py-3 rounded-[10px] text-[16px] font-semibold">Get Your Coupons</button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[300px] flex-row-reverse w-[100vw] bg-gradient-to-r from-blue-400 to-blue-950 p-[50px] mb-[60px]">
        <div className="w-[30%] ">
          <Image className="w-[100%]" src={assets.about_img_3} alt="student"></Image>
        </div>
        <div className="w-[60%] text-white ">
          <span className="uppercase text-[16px] opacity-60">Gaming</span>
          <h1 className=" font-semibold text-3xl my-3">Dell Gaming Series</h1>
          <p className="opacity-65 w-[65%] text-[17px] tracking-wide mb-4">Experience high performance gaming with iconic designs and intelligently engineered laptops..</p>
          <button className="bg-white cursor-pointer text-blue-500 text-center w-[100%] py-3 rounded-[10px] text-[16px] font-semibold">View Gaming Series</button>
        </div>
      </div>
    </div>
  )
}

export default LaptopTypes