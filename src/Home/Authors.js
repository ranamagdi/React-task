import React from "react";
 function Authors(){
    return(
        <div>

            
      <div className="authors">
        <div className="container">
          <h2>Top Authors</h2>
         <div className="line"></div>         
        <div className="content row "> 
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div className="image">
             <img src="images/author1.png"/>  
             <h5>Colleen Hoover</h5>        
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div className="image">
             <img src="images/author2.png"/>   
             <h5>Robert T. Kiyosaki</h5>       
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="image">
             <img src="images/author3.png"/>  
             <h5>Neil Gaiman</h5>        
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div className="image">
             <img src="images/author4.png"/>  
             <h5>Jennifer Egan</h5>        
            </div>         
          </div>

        
        </div>   
        </div>
      </div>


        </div>
    )
 }
 export default Authors;