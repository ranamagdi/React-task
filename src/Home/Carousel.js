import React from "react";


function Carousel(){
    return(
       <div>
        <div className="container-fluid p-0 mt-2">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">     
   
        <div className="carousel-indicators pb-1">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active pb-4 text-img">
            <img src="images/book1.jpg" className="d-block w-100 image-carousel" />      
          </div>
          <div className="carousel-item pb-4 text-img">
            <img src="images/book2.jpg" className="d-block w-100 image-carousel" />           
          </div>
          <div className="carousel-item pb-4 text-img">
            <img src="images/book3.jpg" className="d-block w-100 image-carousel"/>            
          </div>

          <div className="carousel-item pb-4 text-img">
            <img src="images/book4.png" className="d-block w-100 image-carousel"/>            
          </div>
          
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden ">Next</span>
        </button>
       
      </div>
      </div>

       </div>

    )}
 export default Carousel;   