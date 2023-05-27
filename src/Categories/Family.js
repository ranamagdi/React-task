import Navbar from "../Home/Navbar";
import { Col, Container, Row,Card,CardBody,CardTitle,CardText} from "reactstrap";
import Footer from "../Home/Footer";
import { CartProvider, useCart } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";
import FamilyProducts from "../FamilyProducts"

function FamilyCart(){   
   
    const { addItem } = useCart();

    return(      
  
            <div>
                 
               <Container>
                <Row>
                { FamilyProducts.map((item,index)=>
                <Col key={index} className="mt-5 col-lg-4 col-md-6 col-sm-12">
                <Card className="card_style">
                    <img src={item.image} className="image-card"/>
                        <CardBody>
                        <CardTitle tag="h4" className="cardtext-h4">
                           {item.title}
                            </CardTitle>
                        
                            <CardText tag="h5" className="cardtext-h5">
                            ${item.price}
                            </CardText>
                         </CardBody>
                         <div class="feature-content">
                            <div class="text">
                             <a className="col-lg-12" onClick={() => addItem(item)}><i class="fa-solid fa-cart-plus"></i></a> 
                             <Link className="col-lg-12" to={`/familydetails/${item.title}`}>Details</Link> 
                             
                            </div>
                        </div>
                        </Card>
                 
                 </Col>
               )}
                </Row>
               </Container>
              
            
            </div>
        )
    }
    function Family() {
        return (
          <CartProvider>
             <Navbar/>  
            <FamilyCart />           
            <Footer/>
            <ScrollToTop smooth="true" className="scroll-style" width="35" />
          </CartProvider>
        );
      }
    

export default Family;