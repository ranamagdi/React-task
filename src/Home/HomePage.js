import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Welcome from "./Welcome";
import Service from "./Service";
import Advertising from "./Advertising";
import Authors from "./Authors";
import Footer from "./Footer";

function HomePage(){
    return(
    <div>
      <Navbar/>
      <Carousel/>
      <Welcome/>
      <Service/>
      <Advertising/>
      <Authors/>
      <Footer/>

   
    </div>
    )
  }
  export default HomePage;