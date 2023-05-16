import { Component } from "react";
import Navbar from "../Home/Navbar";
import axios from "axios";
import { Col, Container, Row,Card,CardBody,CardTitle,CardText} from "reactstrap";
import Footer from "../Home/Footer";


class Economic extends Component{
    state={
        product:[]
    }
    componentDidMount(){
        axios.get('scripts/Economic.json')
        .then((result)=>{
            this.setState(
                {
                    product:result.data.books
                }
            )
        })
    }
    render(){
        return(
            <div>
               <Navbar/>     
               <Container>
                <Row>
                {this.state.product.map((item)=>
                <Col className="mt-5 col-lg-4 col-md-6 col-sm-12">
                    <Card className="card_style">
                        <img src={item.image} className="image-card"/>
                        <CardBody>
                        <CardTitle tag="h4" className="cardtext-h4">
                           {item.title}
                            </CardTitle>
                        
                            <CardText tag="h5" className="cardtext-h5">
                            {item.price}
                            </CardText>
                         </CardBody>
                         <div class="feature-content">
                            <div class="text">
                             <a className="col-lg-12"><i class="fa-solid fa-cart-plus"></i></a> 
                               <a className="col-lg-12">More details</a>
                            </div>
                        </div>
                        </Card>
                 
                 </Col>
               )}
                </Row>
               </Container>
               <Footer/>
            
            </div>
        )
    }
}
export default Economic;