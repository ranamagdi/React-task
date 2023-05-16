import { CartProvider,useCart } from "react-use-cart";
import { Container } from "reactstrap";

import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";

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
      return(<p className="text-center">Your cart is empty</p>);
  }
  
    return (
      <div className="cart-style">
        <h1 className="text-center">Cart ({totalUniqueItems})
        <button className="btn btn-danger" onClick={()=>emptyCart()}>Remove all products</button>
        </h1>
        <Container>
        <table className="table table-dark">
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Opration</th>
          <tbody>
          {items.map((item) => (
            <tr key={item.id}>
             <td> {item.title}</td>
             <td> {item.quantity}</td>
             <td> {item.price*item.quantity}</td>
             <td>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                className="btn btn-info"
              >
                -
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                className="btn btn-success "
              >
                +
              </button>
              <button className="btn btn-danger" onClick={() => removeItem(item.id)}>&times;
              
              </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        <h2 className="text-center">All Products{totalItems}</h2>
        <h2  className="text-center"> The total={cartTotal}</h2>
        <div className="text-center">
        <Link className="btn btn-primary mx-2" to="/">Back to home</Link>
        <button className="btn btn-warning">Payment</button>
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
        </CartProvider>
    )
  }
  export default CartPage;