import React from "react";
import { Col, Container, Row,Card,CardBody,CardTitle,CardText} from "reactstrap";
import { CartProvider, useCart } from "react-use-cart";



function Service(){
  const { addItem } = useCart();
  const products =
  [
      {
       "id" :41,  
      "title": "Little Book of Baby Massage",
      "subtitle": "FINALIST FOR THE BOOKS FOR A BETTER LIFE AWARD",
      "isbn13": "9781617291609",
      "price": 19.99,
      "image": "https://m.media-amazon.com/images/I/41ivZ7wPz8L.jpg",
      "url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FBABY-MASSAGE-detailed-families-everything-ebook%2Fdp%2FB08562Z621&psig=AOvVaw03tn7t4HCmD8WhbaxliARy&ust=1684346248202000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNiCk_C0-v4CFQAAAAAdAAAAABAI"
      },
      {
      "id" :42, 
      "title": "No Drama Discipline",
      "subtitle": "The Art of Chasing What Matters",
      "isbn13": "9780852230206",
      "price": 6.7,
      "image": "https://m.media-amazon.com/images/I/71mx4AuVJUL.jpg",
      "url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.co.uk%2FNo-Drama-Discipline-Whole-Brain-Nurture-Developing%2Fdp%2F034554806X&psig=AOvVaw2kY-9Khc_-VtfDOzEGZdjX&ust=1684346671843000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIC0rbq2-v4CFQAAAAAdAAAAABAE"
      },
      {
      "id" :43, 
      "title": "Just Keep Buying",
      "subtitle": "Secret Child of a Sixties Supermodel by Fedorko, Susan Paperback",
      "isbn13": "9781484211830",
      "price": 30,
      "image": "https://m.media-amazon.com/images/I/51v0KSrH74L.jpg",
      "url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FJust-Keep-Buying-Proven-wealth%2Fdp%2F9394407006&psig=AOvVaw3RwrOcvSw52B_-jbKoBKQu&ust=1684346718369000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIC-u9C2-v4CFQAAAAAdAAAAABAE"
      },
      {
      "id" :44, 
      "title": "The Bezos Letters",
      "subtitle": "A Little Girl, an Earthquake, and the Making of a Family",
      "isbn13": "9781484268780",
      "price": 38.74,
      "image": "https://kbimages1-a.akamaihd.net/264a83ca-659b-436f-9921-229acb4b3752/180/1000/False/the-bezos-letters-3.jpg",
      "url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kobo.com%2Fca%2Fen%2Febook%2Fthe-bezos-letters-3&psig=AOvVaw12oYKfyMadxWz6fngMdc4s&ust=1684346759044000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCjjeS2-v4CFQAAAAAdAAAAABAY"
      }
    
      ];
  
    return(
      <CartProvider>
      <div className="best" id="best-book">
                 
      <Container className="best-text">
       <h1>Best of 2022</h1> 
       <div className="line"></div>
       <Row>
       {products.map((item)=>
       <Col key={item.id} className="mt-3 col-lg-3 col-md-6 col-sm-12">        
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