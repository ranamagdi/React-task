import React from "react";

function Welcome(){
    return(
        <div>
             <div className="welcome">
        <div className="container">
        <h2>Welcome</h2>
        <div className="line"></div>
        <p>Fortune strore will offer you the best books by famous authors. And will offer ebooks with special categories like stories,children and adults books to enjoy more and more.</p>
        <div className="content row">
          <div className="image col-lg-6 col-md-12 col-sm-12">
            <img src="images/books.jpg"/>
          </div>
           <div className="text col-lg-6 col-md-12 col-sm-12">
        
             <h4>Fortune will get the best environment to read: </h4>
             <ul>
              <li><i className="fa-regular fa-circle-check icon"></i>You will get the best offers.</li>
              <li><i className="fa-regular fa-circle-check icon"></i>You will get the fast dilevry.</li>
              <li><i className="fa-regular fa-circle-check icon"></i>You will find 24/7 support. </li>
             </ul>
            </div>
        </div>
      </div>
      </div>


        </div>
    )
}
export default Welcome;