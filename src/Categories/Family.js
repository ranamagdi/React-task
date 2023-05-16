import Navbar from "../Home/Navbar";
import { Col, Container, Row,Card,CardBody,CardTitle,CardText} from "reactstrap";
import Footer from "../Home/Footer";
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router-dom";


function FamilyCart(){
    const { addItem } = useCart();
    const products =
    [
        {
         "id" :1,  
        "title": "The Awakened Family",
        "subtitle": "FINALIST FOR THE BOOKS FOR A BETTER LIFE AWARD",
        "isbn13": "9781617291609",
        "price": "$59.99",
        "image": "https://m.media-amazon.com/images/I/41U8n+dbfYL.jpg",
        "url": "https://www.amazon.com/dp/B01M659VK2?tag=uuid10-20"
        },
        {
        "id" :2, 
        "title": "Finding the Bright Side",
        "subtitle": "The Art of Chasing What Matters",
        "isbn13": "9780852230206",
        "price": "$31.65",
        "image": "https://m.media-amazon.com/images/I/415Vh9cDAgS._SL500_.jpg",
        "url": "https://www.amazon.com/dp/1524763470?tag=uuid10-20"
        },
        {
        "id" :3, 
        "title": "Cricket",
        "subtitle": "Secret Child of a Sixties Supermodel by Fedorko, Susan Paperback",
        "isbn13": "9781484211830",
        "price": "$49.99",
        "image": "https://images-na.ssl-images-amazon.com/images/I/41L5GR46e-L.jpg",
        "url": "https://www.amazon.com/Cricket-Sixties-Supermodel-Fedorko-Paperback/dp/B011MDIOKQ?tag=uuid10-20"
        },
        {
        "id" :4, 
        "title": "Finding Chika",
        "subtitle": "A Little Girl, an Earthquake, and the Making of a Family",
        "isbn13": "9781484268780",
        "price": "$38.74",
        "image": "https://m.media-amazon.com/images/I/41UhSvXGagL._SL500_.jpg",
        "url": "https://www.amazon.com/dp/0062952390?tag=uuid10-20"
        },
        {
        "id" :5, 
        "title": "Beyond the Sling",
        "subtitle": "A Real-Life Guide to Raising Confident, Loving Children the Attachment Parenting Way",
        "isbn13": "9781782168355",
        "price": "$16.99",
        "image": "https://images-na.ssl-images-amazon.com/images/I/511pPQjiZML.jpg",
        "url": "https://www.amazon.com/Beyond-Sling-Real-Life-Confident-Attachment/dp/1451662181?tag=uuid10-20"
        },
        {
        "id" :6, 
        "title": "A Better Man",
        "subtitle": "A Letter to My Son",
        "isbn13": "9781783553273",
        "price": "$44.99",
        "image": "https://m.media-amazon.com/images/I/41TPuDvGtaL._SL500_.jpg",
        "url": "https://www.amazon.com/dp/1616209119?tag=uuid10-20"
        },
        {
        "id" :7, 
        "title": "The Crossover",
        "subtitle": "Kwame Alexander, Dawud Anyabwile(You?)",
        "isbn13": "9781785287527",
        "price": "$39.99",
        "image": "https://m.media-amazon.com/images/I/51fNFqP9n2L._SL500_.jpg",
        "url": "https://www.amazon.com/dp/0544935209?tag=uuid10-20"
        },
        {
        "id" :8, 
        "title": "My Name Is Why",
        "subtitle": "How does a government steal a child and then imprison him",
        "isbn13": "9781785289989",
        "price": "$44.99",
        "image": "https://m.media-amazon.com/images/I/51cywR+93wL._SL500_.jpg",
        "url": "https://www.amazon.com/dp/1786892340?tag=uuid10-20"
        },
        {   "id" :9, 
            "title": "Trusting God Day by Day",
            "subtitle": "365 Daily Devotions",
            "isbn13": "9781785289989",
            "price": "$44.99",
            "image": "https://m.media-amazon.com/images/I/51MPpuVub1L._SL500_.jpg",
            "url": "https://www.amazon.com/dp/1473619637?tag=uuid10-20"
            }
      
        ];
    return(      
  
            <div>
                 
               <Container>
                <Row>
                {products.map((item)=>
                <Col key={item.id} className="mt-5 col-lg-4 col-md-6 col-sm-12">
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
                             <a className="col-lg-12" onClick={() => addItem(item)}><i class="fa-solid fa-cart-plus"></i></a> 
                               <a className="col-lg-12">More details</a>
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
            <FamilyCart/>
            <Footer/>
          </CartProvider>
        );
      }
    

export default Family;