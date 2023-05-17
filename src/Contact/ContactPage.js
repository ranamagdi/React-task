import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Contact from "./Contact";
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";

function ContactPage(){
    return(
        <CartProvider>
            <Navbar/>
            <Contact/>
            <Footer/>
            <ScrollToTop smooth="true" className="scroll-style" width="35" />
        </CartProvider>
    )
}

export default ContactPage;