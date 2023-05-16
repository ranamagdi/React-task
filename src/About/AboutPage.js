import React from "react";
import About from "./About";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { CartProvider } from "react-use-cart";


function AboutPage(){
    return(
      <CartProvider>
          <Navbar/>
          <About/>
          <Footer/>        
      </CartProvider>

    )
}
export default AboutPage;