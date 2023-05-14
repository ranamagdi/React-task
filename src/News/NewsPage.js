import React from "react";
import News from "./News";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
function NewsPage(){
    return(
        <div>
            <Navbar/>
            <News/>
            <Footer/>

        </div>
    )
}
export default NewsPage;