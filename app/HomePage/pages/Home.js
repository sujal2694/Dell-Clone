"use client"
import Banner from "../Banner/page";
import FeatureProducts from "../Featureproducts/page";
import Hero from "../Hero/page";
import HeroOptions from "../Herooptions/page";
import LaptopType from "../laptopTypes/page";
import Links from "../Links/page";
import Support from "../Support/page";
import Routes from "../Routes/page";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroOptions />
      <Routes/>
      <FeatureProducts />
      <Banner />
      <Support />
      <LaptopType />
      <Links />
    </>
  )
}