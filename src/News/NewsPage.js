import React from "react";
import News from "./News";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";

function NewsPage(){
    return(
        <CartProvider>
            <Navbar/>
            <News/>
            <Footer/>
            <ScrollToTop smooth="true" className="scroll-style" width="35" />
      </CartProvider>
    )
}
export default NewsPage;