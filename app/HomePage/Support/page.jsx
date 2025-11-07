const Support = ({}) => {
  return (
    <div className="w-[100vw] my-[100px]">
        <div className="w-[100%] text-center">
            <p className="uppercase text-[15px] text-gray-500">dell support</p>
            <h1 className="text-3xl text-black mt-1.5 font-semibold">We're Here to Help</h1>
        </div>
        <div className="flex items-center justify-center gap-[20px] my-[30px]">
            <div className="border-blue-200 border-1 bg-blue-400/10 text-center px-[70px] py-[20px] rounded-[10px] shadow-md ">
                <i className="far fa-headphones text-4xl font-light mb-1.5"></i>
                <p className="text-[15px] font-light tracking-wide text-gray-500">Support</p>
            </div>
            <div className="border-blue-200 border-1 bg-blue-400/10 text-center px-[70px] py-[20px] rounded-[10px] shadow-md ">
                <i className="bx bx-plus-shield text-4xl font-light mb-1.5"></i>
                <p className="text-[15px] font-light tracking-wide text-gray-500">Support</p>
            </div>
            <div className="border-blue-200 border-1 bg-blue-400/10 text-center px-[70px] py-[20px] rounded-[10px] shadow-md ">
                <i className="bx bxs-star text-4xl font-light mb-1.5"></i>
                <p className="text-[15px] font-light tracking-wide text-gray-500">Support</p>
            </div>
        </div>
    </div>
  )
}

export default Support