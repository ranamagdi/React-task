import React from "react";
import { NavLink } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";

function Navbar(){
  var {totalItems}=useCart();
    return(
      <CartProvider>
            <div className="header">              
    
    <nav className="navbar navbar-expand-lg fixed-top pt-3">
      <div className="container">                       
          <a className="navbar-brand logo" href="#">                 
              <img src="images/logo2.png"/>
          </a>
       
          <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" >About us</NavLink>
          </li>
          <li className="nav-item ">                 
            <div className="dropdown nav-link">
              <a className="dropdown-toggle" href="#" data-bs-toggle="dropdown">Categories</a>
              <ul className="dropdown-menu bg-light">                 
                  <li><NavLink className="dropdown-item" to="/cookery">Cookery books</NavLink></li>                      
                  <li><NavLink className="dropdown-item" to="/family">Family Books</NavLink></li>  
                  <li><NavLink className="dropdown-item" to="/economic">Economic books</NavLink></li>                     
                </ul>
          </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/f_a_q" >F.A.Q </NavLink>
          </li> 
          <li className="nav-item">
            <NavLink className="nav-link" to="/news">News</NavLink>
          </li> 
          <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact us</NavLink>
            </li>  
            <li className="nav-item nav-last">
              <NavLink className="nav-link not" to="/cart" ><i className="fa-solid fa-cart-shopping cart-icon"></i> <span className="total">{totalItems}</span></NavLink>
            </li>            
        </ul>                   
        
      </div>         
    </div>
    </nav>
  </div>

           
       </CartProvider>
    )
}

export default Navbar;