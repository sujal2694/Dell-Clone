"use client"
import { createContext, useState } from "react";
import { assets } from "../assets/assets";
import Topdeals from "../TopDeals/page";

export const StoreContext = createContext();

const StoreContextProvider = ({children}) => {

    const laptops = assets.Laptops;
    const feature_products = assets.feature_products;
    const links = assets.Links;
    const Desktops = assets.Desktops;
    const MonitorsLeft = assets.MonitorsLeft;
    const MonitorsRight = assets.MonitorsRight;
    const accessoriesLeft = assets.AccessoriesLeft;
    const accessoriesRight = assets.AccessoriesRight;
    const dealsLeft = assets.DealsLeft;
    const dealsRight = assets.DealsRight;
    const Products = assets.Products;
    const topDealProducts = assets.TopDeals;
    const FootOptions = assets.FooterOptions;

    const [category, setCategory] = useState("laptop");

    const contextValue = {
        laptops,
        feature_products,
        links,
        Desktops,
        category,
        setCategory,
        MonitorsLeft,
        MonitorsRight,
        accessoriesLeft,
        accessoriesRight,
        dealsLeft,
        dealsRight,
        Products,
        topDealProducts,
        FootOptions
    }


    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;

