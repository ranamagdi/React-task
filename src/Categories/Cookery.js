import Navbar from "../Home/Navbar";
import { Col, Container, Row,Card,CardBody,CardTitle,CardText} from "reactstrap";
import Footer from "../Home/Footer";
import { CartProvider, useCart } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";
import CookeryProducts from "../CookeryProduct";
import { Link } from "react-router-dom";


function CookeryCart(){
    const { addItem } = useCart();

    return(

            <div className="cards">

               <Container>
                <Row>
                {CookeryProducts.map((item,index)=>
                <Col key={index}  className="mt-5 col-lg-4 col-md-6 col-sm-12">
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
                         <div className="feature-content">
                            <div className="text">
                             <a className="col-lg-12 icon_add" onClick={() => addItem(item)}><i className="fa-solid fa-cart-plus"></i></a>
                             <Link className="col-lg-12" to={`/cookerydetails/${item.title}`}>Details</Link>
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
    function Cookery() {
        return (
          <CartProvider>
             <Navbar/>
            <CookeryCart/>
            <Footer/>
            <ScrollToTop smooth="true" className="scroll-style" width="35" />
          </CartProvider>
        );
      }


export default Cookery;
