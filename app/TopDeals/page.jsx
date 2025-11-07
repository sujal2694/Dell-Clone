import About from "../HomePage/About/page"
import Footer from "./Footer/page"
import Hero from "./Hero/page"
import HeroOptions from "./HeroOptions/page"
import Navbar from "./Navbar/page"
import Offers from "./Offers/page"
import OptionMenu from "./OptionMenu/page"
import Path from "./Path/page"
import Products from "./Products/page"

const Topdeals = ({}) => {
  return (
    <>
        <Navbar/>
        <OptionMenu/>
        <Offers/>
        <Hero/>
        <Path/>
        <HeroOptions/>
        <Products/>
        <About/>
        <Footer/>
    </>
  )
}

export default Topdeals