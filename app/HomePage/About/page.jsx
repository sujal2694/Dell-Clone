
const About = () => {
    return (
        <div>
            <div className="w-[100vw] text-center text-black text-3xl font-semibold">
                <h1>Why Our Users Trust us</h1>
            </div>
            <div className="flex items-center justify-center gap-[20px] my-[30px] w-[75vw] m-[auto]">
                <div className="border-blue-200 border-1 bg-blue-400/10 text-center px-[20px] py-[20px] rounded-[10px] shadow-md ">
                    <i className="bx bx-bolt text-4xl font-light mb-1.5"></i>
                    <h1 className="font-semibold text-xl mb-2">Expert Tech Support</h1>
                    <p className="text-[16px] text-gray-700/80">Access to Dell's specialized technical support team available 24/7 for all your device needs</p>
                </div>
                <div className="border-blue-200 border-1 bg-blue-400/10 text-center px-[20px] py-[20px] rounded-[10px] shadow-md ">
                    <i className="bx bx-spanner text-4xl font-light mb-1.5"></i>
                    <h1 className="font-semibold text-xl mb-2">Customizable Products</h1>
                    <p className="text-[16px] text-gray-700/80">Build your perfect computer with personalized specifications to meet your exact requirements</p>
                </div>
                <div className="border-blue-200 border-1 bg-blue-400/10 text-center px-[20px] py-[20px] rounded-[10px] shadow-md ">
                    <i className="bx bx-iframe text-4xl font-light mb-1.5"></i>
                    <h1 className="font-semibold text-xl mb-2">Secure Checkout</h1>
                    <p className="text-[16px] text-gray-700/80">Shop with confidence using our encrypted payment system and data protection guarantees</p>
                </div>
                <div className="border-blue-200 border-1 bg-blue-400/10 text-center px-[20px] py-[20px] rounded-[10px] shadow-md ">
                    <div className="w-[100%] relative flex items-center justify-center">
                        <i className="bx bx-shield text-4xl font-light mb-1.5"></i>
                        <i className="bx bx-check text-xl font-light absolute top-[10px] text-[14px] text-black"></i>
                    </div>
                    <h1 className="font-semibold text-xl mb-2 w-full">Extended Protection Plans</h1>
                    <p className="text-[16px] text-gray-700/80">Safeguard your investment with optional coverage plans beyond the standard warranty</p>
                </div>
            </div>
        </div>
    )
}

export default About;
