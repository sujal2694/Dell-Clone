import About from "./HomePage/About/page";
import Footer from "./HomePage/Footer/page";
import Navbar from "./HomePage/Navbar/page";
import OptionMenu from "./HomePage/OptionMenu/page";
import HomePage from "./HomePage/pages/Home";



export default function Home() {
  return (
    <>
    <Navbar/>
    <OptionMenu/>
    <HomePage/>
    <About/>
    <Footer/>
    </>
  );
}
