"use client"
import { useContext, useEffect } from "react"
import Desktops from "./Desktops/page"
import LapTypes from "./LapTypes/page"
import { StoreContext } from "../../context/StoreContext"
import Monitors from "./Monitors/page"
import Accessories from "./Accessories/page"
import Deals from "./Deals/page"

const Routes = ({ }) => {
    const { category } = useContext(StoreContext);
    return (
        <div className="w-[90vw] m-[auto] ">
            {category === 'laptop' && <LapTypes />}
            {category === 'desktop' && <Desktops/>}
            {category === 'monitor' && <Monitors/>}
            {category === 'accessories' && <Accessories/>}
            {category === 'deals' && <Deals/>}
        </div>
    )
}

export default Routes