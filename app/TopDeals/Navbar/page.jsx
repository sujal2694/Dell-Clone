const Navbar = ({}) => {
  return (
    <div className="flex items-center justify-between absolute top-0 left-0 w-[100vw] z-10 font-sans bg-white">
      <div className="font-semibold text-3xl flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-blue-700 pl-2.5">DELL <span className="font-extralight">Technologies</span></h1>
        <div className="relative ml-10">
          <i className="bx bx-search absolute left-2 top-4 text-[18px]"></i>
          <input type="serach" placeholder="What can we help you find?" className="border-1 border-gray-400 pt-2 pb-2 pl-8 w-[500px] placeholder:text-gray-400 text-[14px] font-light" />
        </div>
      </div>
      <div className="flex items-center gap-5 mr-5 h-[40px]">
        <div className="relative group flex items-center cursor-pointer gap-2 p-1.5 hover:bg-gray-200 h-[100%] border-b-2 border-transparent hover:border-blue-700 duration-300">
          <i className='bx  bx-user text-[18px] '></i>
          <div className="text-[15px]">
            <p className="group">Sign In <i className="fa fa-chevron-down font-[400] text-[14px] transition-transform duration-300 group-hover:rotate-180"></i></p>
          </div>
          <div className="hidden group-hover:block absolute top-[100%] left-[-160%] min-w-[350px] bg-white p-2 rounded-[4px] shadow-md">
            <div className=" flex items-start justify-center flex-col ">
              <div className="mb-2">
                <h1 className="text-[18px] font-semibold mb-1.5 text-gray-600 w-[100%] text-left">My Account</h1>
                <div className="text-[15px] text-gray-600 flex items-center gap-1.5 mb-[3px] "><p className="rounded-[50%] bg-gray-600 border-none h-1 w-1 "></p>Place orders quickly and easily</div>
                <div className="text-[15px] text-gray-600 flex items-center gap-1.5 mb-[3px] "><p className="rounded-[50%] bg-gray-600 border-none h-1 w-1 "></p>View orders and track your shipping status</div>
                <div className="text-[15px] text-gray-600 flex items-center gap-1.5 mb-[3px] "><p className="rounded-[50%] bg-gray-600 border-none h-1 w-1 "></p>Create and access a list of your products</div>
              </div>
              <div className=" text-center uppercase border-1 border-blue-500 w-[100%] rounded-[5px] text-white hover:text-blue-500 bg-blue-500 hover:bg-white cursor-pointer font-semibold py-1.5 mb-2.5 ">sign in</div>
              <div className=" text-center uppercase border-1 border-blue-500 w-[100%] rounded-[5px] text-blue-500 hover:text-white bg-white hover:bg-blue-500 cursor-pointer font-semibold py-1.5 ">create an account</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[15px]">
          <i className="bx bx-headphone-mic text-[18px]"></i>
          Support
        </div>
        <div className=" relative group flex items-center cursor-pointer gap-2 text-[15px] p-1.5 hover:bg-gray-200 h-[100%] border-b-2 border-transparent hover:border-blue-700 duration-300">
          <i className="bx bx-cart text-[20px]"></i>
          <p className="group">Cart <i className="fa fa-chevron-down text-[14px] transition-tranform duration-300 group-hover:rotate-180"></i></p>
          <div>
            <div className="hidden group-hover:block absolute top-[100%] left-[-90%] shadow-lg bg-white px-5 py-3">
              <p>Your cart is empty.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar