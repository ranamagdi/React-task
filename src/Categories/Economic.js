import Navbar from "../Home/Navbar";
import { Col, Container, Row,Card,CardBody,CardTitle,CardText} from "reactstrap";
import Footer from "../Home/Footer";
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router-dom";


function EconomicCart(){
    const { addItem } = useCart();
    const products =
    [
        {
         "id":20,   
        "title": "Dead in the Water",
        "subtitle": "Matthew Campbell and Kit Chellel",
        "isbn13": "9781617291609",
        "price": 59.99,
        "image": "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fft-ig-images-prod.s3-website-eu-west-1.amazonaws.com%2Fv1%2F8340377190-rcaz4.jpg?source=ft_ig_business_book_award&width=400&compression=best",
        "url": "https://ig.ft.com/sites/business-book-award/books/2022/shortlist/dead-in-the-water-by-matthew-campbell-and-kit-chellel"
        },
        {
         "id":21,
        "title": "Lords of Finance",
        "subtitle": "Liaquat Ahamed",
        "isbn13": "9780852230206",
        "price": 31.65,
        "image": "https://www.ft.com/__origami/service/image/v2/images/raw/http://ig.ft.com/static/sites/business-book-of-the-year/covers/Lords_of_Finance.jpg?source=ft_ig_business_book_award&width=400&compression=best",
        "url": "https://ig.ft.com/sites/business-book-award/books/2009/winner/lords-of-finance-by-liaquat-ahamed"
        },
        {
        "id":22,
        "title": "Fault Lines",
        "subtitle": "Raghuram Rajan",
        "isbn13": "9781484211830",
        "price": 49.99,
        "image": "https://www.ft.com/__origami/service/image/v2/images/raw/http://ig.ft.com/static/sites/business-book-of-the-year/covers/Fault_Lines.jpg?source=ft_ig_business_book_award&width=400&compression=best",
        "url": "https://ig.ft.com/sites/business-book-award/books/2010/winner/fault-lines-by-raghuram-rajan"
        },
        {
        "id":23,
        "title": "Capital in the Twenty-First Century",
        "subtitle": "Thomas Piketty",
        "isbn13": "9781484268780",
        "price": 38.74,
        "image": "https://www.ft.com/__origami/service/image/v2/images/raw/http://ig.ft.com/static/sites/business-book-of-the-year/covers/Capital_in_the_First_Century.jpg?source=ft_ig_business_book_award&width=400&compression=best",
        "url": "https://ig.ft.com/sites/business-book-award/books/2014/winner/capital-in-the-twenty-first-century-by-thomas-piketty"
        },
        {
        "id":24,
        "title": "Poor Economics",
        "subtitle": "Abhijit Banerjee, Esther Duflo",
        "isbn13": "9781782168355",
        "price": 16.99,
        "image": "https://www.ft.com/__origami/service/image/v2/images/raw/http://ig.ft.com/static/sites/business-book-of-the-year/covers/Poor_Economics.jpg?source=ft_ig_business_book_award&width=400&compression=best",
        "url": "https://ig.ft.com/sites/business-book-award/books/2011/winner/poor-economics-by-abhijit-banerjee-and-esther-duflo"
        },
        {
        "id":25,
        "title": "The Rise of the Robots",
        "subtitle": "Martin Ford",
        "isbn13": "9781783553273",
        "price": 44.99,
        "image": "https://www.ft.com/__origami/service/image/v2/images/raw/http://ig.ft.com/static/sites/business-book-of-the-year/covers/Rise_Of_Robots.jpg?source=ft_ig_business_book_award&width=400&compression=best",
        "url": "https://ig.ft.com/sites/business-book-award/books/2015/winner/the-rise-of-the-robots-by-martin-ford"
        },
        {
        "id":26,
        "title": "Chip War",
        "subtitle": "Chris Miller",
        "isbn13": "9781785287527",
        "price": 19.99,
        "image": "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fft-ig-images-prod.s3-website-eu-west-1.amazonaws.com%2Fv1%2F8340457253-ndbcf.jpg?source=ft_ig_business_book_award&width=400&compression=best",
        "url": "https://ig.ft.com/sites/business-book-award/books/2022/winner/chip-war-by-chris-miller"
        },
        {
        "id":27,
        "title": "Invisible Women",
        "subtitle": "Caroline Criado Perez",
        "isbn13": "9781785289989",
        "price": 12.99,
        "image": "https://www.ft.com/__origami/service/image/v2/images/raw/http://ig.ft.com/static/sites/business-book-of-the-year/covers/Cover_Invisible_Women.jpg?source=ft_ig_business_book_award&width=400&compression=best",
        "url": "https://ig.ft.com/sites/business-book-award/books/2019/winner/invisible-women-by-caroline-criado-perez"
        },
        {   "id":28,
            "title": "The Man Who Knew",
            "subtitle": "Sebastian Mallaby",
            "isbn13": "9781785289989",
            "price": 44.99,
            "image": "https://www.ft.com/__origami/service/image/v2/images/raw/http://ig.ft.com/static/sites/business-book-of-the-year/covers/The_Man_Who_Knew.jpg?source=ft_ig_business_book_award&width=400&compression=best",
            "url": "https://ig.ft.com/sites/business-book-award/books/2016/winner/the-man-who-knew-by-sebastian-mallaby"
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
                             ${item.price}
                            </CardText>
                         </CardBody>
                         <div class="feature-content">
                            <div class="text">
                             <a className="col-lg-12" onClick={() => addItem(item)}><i class="fa-solid fa-cart-plus"></i></a> 
                             
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
    function Economic() {
        return (
          <CartProvider>
             <Navbar/>  
            <EconomicCart/>
            <Footer/>
          </CartProvider>
        );
      }
    

export default Economic;