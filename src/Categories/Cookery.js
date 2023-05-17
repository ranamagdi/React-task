import Navbar from "../Home/Navbar";
import { Col, Container, Row,Card,CardBody,CardTitle,CardText} from "reactstrap";
import Footer from "../Home/Footer";
import { CartProvider, useCart } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";



function CookeryCart(){
    const { addItem } = useCart();
    const products =
    [
        {
        "id":10,   
        "title": "Good Housekeeping Cookery Book",
        "subtitle": "The Cook's Classic Companion",
        "isbn13": "9781617291609",
        "price": 29.99,
        "image": "https://pictures.abebooks.com/isbn/9780852234204-uk.jpg",
        "url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.abebooks.co.uk%2F9780852234204%2FGood-Housekeeping-Cookery-Book-Cooks-0852234201%2Fplp&psig=AOvVaw27V7dkX2ACYQAa7TkMp-u5&ust=1684181380750000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCbxNzO9f4CFQAAAAAdAAAAABAE"
        },
        {
        "id":11, 
        "title": "Good Housekeeping Cookery Book",
        "subtitle": "AbeBooks",
        "isbn13": "9780852230206",
        "price":31.65,
        "image": "https://pictures.abebooks.com/isbn/9780852230206-uk.jpg",
        "url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.abebooks.co.uk%2F9780852230206%2FGood-Housekeeping-Cookery-Book-0852230206%2Fplp&psig=AOvVaw27V7dkX2ACYQAa7TkMp-u5&ust=1684181380750000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCbxNzO9f4CFQAAAAAdAAAAABAJ"
        },
        {
        "id":12,    
        "title": "The 8-Week Blood Sugar Diet Recipe Book",
        "subtitle": "Following Dr Michael Mosley's Number 1 bestselling 8-week Blood Sugar Diet",
        "isbn13": "9781484211830",
        "price": 49.99,
        "image": "https://productimages.worldofbooks.com/1780722931_thumbnail.jpg",
        "url": "https://www.wob.com/en-gb/books/dr-clare-bailey/8-week-blood-sugar-diet-recipe-book/9781780722931"
        },
        {
        "id":13, 
        "title": "Paddington's Cookery Book",
        "subtitle": "Get your paws sticky with Paddington, the classic bear from Darkest Peru",
        "isbn13": "9781484268780",
        "price": 34.74,
        "image": "https://m.media-amazon.com/images/I/81vtg9v11qL.jpg",
        "url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.co.uk%2FPADDINGTONS-COOKERY-BOOK-Michael-Bond%2Fdp%2F0007423675&psig=AOvVaw27V7dkX2ACYQAa7TkMp-u5&ust=1684181380750000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCbxNzO9f4CFQAAAAAdAAAAABAR"
        },
        {
        "id":14, 
        "title": "The Hairy Bikers Mediterranean Adventure",
        "subtitle": "A celebration of the most delicious and healthy food in the world",
        "isbn13": "9781782168355",
        "price": 19.99,
        "image": "https://productimages.worldofbooks.com/1409171914_thumbnail.jpg",
        "url": "https://www.wob.com/en-gb/books/hairy-bikers/hairy-bikers-mediterranean-adventure-tv-tie-in/9781409171911"
        },
        {
        "id":15, 
        "title": "The complete Indian Diet",
        "subtitle": "Indian Cookery Books: Top Delicious Indian Recipes Indian Recipe Books: Indian Dishes Cookbook eBook",
        "isbn13": "9781783553273",
        "price": 44.99,
        "image": "https://m.media-amazon.com/images/I/51aXXs1AM6L.jpg",
        "url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FIndian-Cookery-Books-Delicious-Cookbook-ebook%2Fdp%2FB07H218KQX&psig=AOvVaw27V7dkX2ACYQAa7TkMp-u5&ust=1684181380750000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCbxNzO9f4CFQAAAAAdAAAAABAY"
        },
        {
        "id":16, 
        "title": "A Plain Cookery Book for the Working Classes",
        "subtitle": "A Plain Cookery Book for the Working Classes eBook by Charles Elme Francatelli",
        "isbn13": "9781785287527",
        "price": 39.99,
        "image": "https://kbimages1-a.akamaihd.net/588ff339-b4bf-4dc7-9966-d8311711c224/1200/1200/False/a-plain-cookery-book-for-the-working-classes-3.jpg",
        "url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kobo.com%2Fie%2Fen%2Febook%2Fa-plain-cookery-book-for-the-working-classes-3&psig=AOvVaw27V7dkX2ACYQAa7TkMp-u5&ust=1684181380750000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCbxNzO9f4CFQAAAAAdAAAAABAo"
        },
        {
        "id":17, 
        "title": "Cooking Made Easy",
        "subtitle": "The ideal cookery book for beginners that goes beyond cooking",
        "isbn13": "9781785289989",
        "price": 44.99,
        "image": "https://kbimages1-a.akamaihd.net/d70288d1-2725-430b-8797-946f41291f58/353/569/90/False/cooking-made-easy-the-ideal-cookery-book-for-beginners-that-goes-beyond-cooking.jpg",
        "url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kobo.com%2Fgr%2Fen%2Febook%2Fcooking-made-easy-the-ideal-cookery-book-for-beginners-that-goes-beyond-cooking&psig=AOvVaw27V7dkX2ACYQAa7TkMp-u5&ust=1684181380750000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCbxNzO9f4CFQAAAAAdAAAAABAg"
        },
        { 
        "id":18,    
        "title": "The Hairy Bikers Eat to Beat Type 2 Diabetes",
        "subtitle": "The bestselling, big-hearted and down-to-earth chefs, The Hairy Bikers",
        "isbn13": "9781785289989",
        "price": 7.5,
        "image": "https://productimages.worldofbooks.com/1841884073_thumbnail.jpg",
        "url": "https://www.wob.com/en-gb/books/hairy-bikers/hairy-bikers-eat-to-beat-type-2-diabetes/9781841884073"
        }
      
        ];
    return(      
  
            <div className="cards">
                 
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