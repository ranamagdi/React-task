import React from "react";
import About from "./About";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";


function AboutPage(){
    return(
      <CartProvider>
          <Navbar/>
          <About/>
          <Footer/>  
          <ScrollToTop smooth="true" className="scroll-style" width="35" />      
      </CartProvider>

    )
}
export default AboutPage;