import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Welcome from "./Welcome";
import Service from "./Service";
import Advertising from "./Advertising";
import Authors from "./Authors";
import Footer from "./Footer";
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";

function HomePage(){
    return(
      <CartProvider>
      <Navbar/>
      <Carousel/>
      <Welcome/>
      <Service/>
      <Advertising/>
      <Authors/>
      <Footer/>
      <ScrollToTop smooth="true" className="scroll-style" width="35" />
   
    </CartProvider>
    )
  }
  export default HomePage;