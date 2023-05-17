import { CartProvider,useCart } from "react-use-cart";
import { Container } from "reactstrap";

import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import ScrollToTop from "react-scroll-to-top";

function Cart() {

    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
      emptyCart,
      totalItems,
      cartTotal,
    } = useCart();
  
    if (isEmpty) {
      return(<h2 className="text-center pt-5">Your cart is empty</h2>);
  }
  
    return (
      <div className="cart-style">
        <h2 className="text-center my-3">Your Cart has <span>{totalUniqueItems}</span> uniquely products
        <button className="btn btn-danger mx-5 btn-style" onClick={()=>emptyCart()}>Remove all products</button>
        </h2>
        <Container>
        <table className="table table-dark text-center table-style">
        <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Opration</th>
         </tr> 
         </thead>
          <tbody>
          {items.map((item) => (
            <tr key={item.id}>
             <td> {item.title}</td>
             <td> {item.quantity}</td>
             <td> ${Math.round(item.price * item.quantity)}</td>
             <td>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                className="btn btn-info btn-style"
              >
                -
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                className="btn btn-success mx-4 btn-style"
              >
                +
              </button>
              <button className="btn btn-danger btn-style" onClick={() => removeItem(item.id)}><i class="fa-solid fa-trash-can"></i>
              
              </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        <h3 className="text-center mt-5 h3-style">The total products= {totalItems} products</h3>
        <h3  className="text-center my-4 h3-style"> The total price= ${Math.round(cartTotal)}</h3>
        <div className="text-center">
        <Link className="btn btn-primary mx-2 btn-style btn-margin" to="/">Back to home</Link>
        <button className="btn btn-warning btn-style btn-margin">Payment</button>
        </div>
        </Container>
      </div>
    );
  }

  function CartPage(){
    return(
        <CartProvider>
            <Navbar/>
            <Cart/>
            <Footer/>
            <ScrollToTop smooth="true" className="scroll-style" width="35" />
        </CartProvider>
    )
  }
  export default CartPage;