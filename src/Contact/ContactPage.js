import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Contact from "./Contact";
import { CartProvider } from "react-use-cart";

function ContactPage(){
    return(
        <CartProvider>
            <Navbar/>
            <Contact/>
            <Footer/>

        </CartProvider>
    )
}

export default ContactPage;