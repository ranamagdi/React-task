import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import F_A_Q from "./F_A_Q";
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";

function F_A_Q_Page(){
    return(
        <CartProvider>
            <Navbar/>
            <F_A_Q/>
            <Footer/>
            <ScrollToTop smooth="true" className="scroll-style" width="35" />
       </CartProvider>
    )
}
export default F_A_Q_Page;