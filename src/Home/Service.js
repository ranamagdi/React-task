import React from "react";
import { Col, Container, Row,Card,CardBody,CardTitle,CardText} from "reactstrap";
import { CartProvider, useCart } from "react-use-cart";
import BestProducts from "../BestProducts";
import { Link } from "react-router-dom";


function Service(){
  const { addItem } = useCart();

  
    return(
      <CartProvider>
      <div className="best" id="best-book">
                 
      <Container className="best-text">
       <h1>Best of 2022</h1> 
       <div className="line"></div>
       <Row>
       {BestProducts.map((item,index)=>
       <Col key={index} className="mt-3 col-lg-3 col-md-6 col-sm-12">        
       <Card className="card_style1">        
           <img src={item.image} className="image-card1"/>
               <CardBody>
               <CardTitle tag="h4" className="cardtext-h4">
                  {item.title}
                   </CardTitle>
               
                   <CardText tag="h5" className="cardtext-h5">
                   ${item.price}
                   </CardText>
                </CardBody>
                <div className="feature-content">
                   <div className="text">
                    <a className="col-lg-12 col-md-12 col-sm-12" onClick={() => addItem(item)}><i className="fa-solid fa-cart-plus"></i></a> 
                    <Link className="col-lg-12" to={`/bestdetails/${item.title}`}>Details</Link> 
                   
                  
                   </div>
               </div>
                
               </Card>
        
        </Col>
      )}
       </Row>
      </Container>
     
      
     </div>
   
    
      </CartProvider>
    )
}


export default Service;