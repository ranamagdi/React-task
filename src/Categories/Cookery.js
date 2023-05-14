import { Component } from "react";
import Navbar from "../Home/Navbar";
import axios from "axios";
import { Col, Container, Row,Card,CardBody,CardTitle,CardText} from "reactstrap";
import Footer from "../Home/Footer";


class Cookery extends Component{
    state={
        product:[]
    }
    componentDidMount(){
        axios.get('scripts/Cookery.json')
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
                <Col className="mt-5">
                    <Card className="card_style">
                        <img src={item.image}/>
                        <CardBody>
                            <CardTitle tag="h5">
                           {item.title}
                            </CardTitle>
                        
                            <CardText tag="h6">
                            {item.price}
                            </CardText>
                         </CardBody>
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
export default Cookery