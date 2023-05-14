import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <div className="header">              
    
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">                       
          <a className="navbar-brand logo" href="#">                 
              <img src="images/logo2.png"/>
          </a>
       
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-expanded="true">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse links " id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/" >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" >About us</Link>
          </li>
          <li className="nav-item ">                 
            <div className="dropdown nav-link">
              <a className="dropdown-toggle" href="#" data-bs-toggle="dropdown">Categories</a>
              <ul className="dropdown-menu bg-light">
                  <li><Link className="dropdown-item" to="/science" >Science Books</Link></li>
                  <li><Link className="dropdown-item" to="/cookery">Cookery books</Link></li>                      
                  <li><a className="dropdown-item">Family Books</a></li>  
                  <li><a className="dropdown-item">Business books</a></li>                     
                </ul>
          </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/f_a_q">F.A.Q</Link>
          </li> 
          <li className="nav-item">
            <Link className="nav-link" to="/news">News</Link>
          </li> 
          <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact us</Link>
            </li>              
        </ul>                   
        
      </div>         
    </div>
    </nav>
  </div>

           
        </div>
    )
}

export default Navbar;