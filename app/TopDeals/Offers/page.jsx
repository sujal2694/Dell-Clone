"use client"
import { useState } from "react"


const Offers = ({ }) => {
  const [slide, setSlide] = useState(false);

  const next = () => {
    setSlide(!slide)
  }

  const prev = () => {
    setSlide(!slide)
  }
  return (
    <div className="w-[100vw] h-[70px] flex items-center justify-center bg-gradient-to-r from-purple-500 via-blue-700 to-blue-800 py-2 px-10 mt-2 text-white overflow-hidden">
      <div className="relative w-[100%] flex items-center">
        <div className="absolute left-[30%] flex items-center gap-5 duration-500" style={{transform: `translateX(${slide ? '-100vw' : '0'})`}}><p className="uppercase font-semibold text-[14px] ">festive<br />offers</p><span className="font-semibold text-[13px] tracking-wide opacity-90">Do more this festive season - with Cashback and No Cost EMI*. <a href="#" className="underline">Buy on Whatsapp</a> | <a href="#" className="underline">Questions? Call 1800-571-4002 or Click to Chat</a></span></div>
        <div className="absolute left-[100vw] w-[100%] flex items-center justify-center gap-2 duration-500" style={{transform: `translateX(${slide ? '-100vw' : '0'})`}}><i className="bx bx-trophy text-3xl"></i><span className="text-xl font-semibold tracking-wide opacity-95">Students Discounts</span></div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <i onClick={next} className='h-[100%] fa fa-arrow-left text-xl  hover:text-gray-300'></i>
        <i onClick={prev} className='h-[100%] fa fa-arrow-right text-xl hover:text-gray-300'></i>
      </div>
    </div>
  )
}

export default Offers