import {
  decrementCart,
  deleteFromCart,
  incrementCart,
} from "../../redux/action";
import styled from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.Addtocart.productID);
  const totalPrice = useSelector((state) => state.Addtocart.totalPrice);
  const dispatch = useDispatch();
  return (
    <div className={styled.cartContainer}>
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className={styled.cartItem}>
          <img
            src={item.image}
            alt={item.name}
            className={styled.productImage}
          />
          <h2 className={styled.productName}>{item.name}</h2>
          <p className={styled.productPrice}>${item.orginalPrice}</p>
          <div className={styled.quantityControls}>
            {/* {item.quantity ===1 ?} */}
            <button
              disabled={item.quantity === 1}
              className={styled.decrementButton}
              onClick={() => dispatch(decrementCart(item.id))}
            >
              -
            </button>
            <p className={styled.quantity}>{item.quantity}</p>
            <button
              disabled={item.quantity === 6}
              className={styled.incrementButton}
              onClick={() => dispatch(incrementCart(item.id))}
            >
              +
            </button>
          </div>
          <button
            className={styled.deleteButton}
            onClick={() => dispatch(deleteFromCart(item.id))}
          >
            Delete
          </button>
        </div>
      ))}
      <hr />
      {cartItems.length >= 1 ? (
        <div className={styled.cartTotal}>
          <p>Total Amount: $ {totalPrice.toFixed(2)}</p>
          <button className={styled.checkOutButton}>Check Out</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
