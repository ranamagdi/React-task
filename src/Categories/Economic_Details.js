import React from "react";
import { CartProvider, useCart } from "react-use-cart";
import { Col, Container, Row,Card,CardBody,CardTitle,CardText} from "reactstrap";
import { useParams } from "react-router";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";


function Economic_Details({product}){

 const {producttitle}=useParams();

 

    return(
     <CartProvider>
             <Navbar/>
              <Container>
                <Row>
                  {product.filter((item)=>item.title===producttitle).map((item,index)=>(
                <Col key={index} className="mt-5 col-lg-6">
                <Card className="card_style-details">
                    <img src={item.image} className="image-card-details"/>
                        <CardBody className="card-details">
                          <h2 className="cardtext-h2">The title:</h2>
                        <CardTitle tag="h4" className="cardtext-h4 pb-3">
                           {item.title}
                            </CardTitle>
                            <h2 className="cardtext-h2">The subtitle:</h2>   
                            <CardTitle tag="h6" className="cardtext-h5 pb-3">
                           {item.subtitle}
                            </CardTitle>
                            <h2 className="cardtext-h2">The price:</h2>
                            <CardText tag="h5" className="cardtext-h5 pb-3">
                            ${item.price}
                            </CardText>
                            <Link className="col-lg-12 btn scroll-style btn-details" to={"/economic"}>Back to books</Link> 
                         </CardBody>                         
                         
                             
                          
                    
                    </Card>
                    </Col>
 ) )}
                </Row>
               </Container>
               <Footer/>
               <ScrollToTop/>
         </CartProvider>

     
    )
}


export default Economic_Details;