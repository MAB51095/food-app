import React from "react";
import { useContext } from "react";
import CartContext from "../context/cart-context";
import Card from "../UI/Card";
import styles from "./CartModal.module.css";
import MenuItem from "./MenuItem";

function CartModal(props) {
  const ctxCart = useContext(CartContext);

  console.log(ctxCart.isCartOpen);
  const closeCart = (e) => {
    ctxCart.toggleCartOpenHandler();
  };
  return (
    <div className={`${styles.cartPage} ${ctxCart.isCartOpen && styles.show}`}>
      <Card className={`${styles.cart}`}>
        <div className={`${styles.close}`} onClick={closeCart}>
          X
        </div>
        <div className={`${styles.cartHeading}`}>Order Invoice - Preview</div>
        <div className={`${styles.cartItems}`}>
          <div className={`${styles.cartItem} ${styles.cartItemHeading}`}>
            <div>Name</div>
            <div>Price</div>
            <div>Qty</div>
          </div>
          {ctxCart.cartItems.map((item, id) => (
            <div className={`${styles.cartItem}`}>
              <div>{item.name}</div>
              <div>₹ {item.price}/- </div>
              <div> x{item.quantity}</div>
            </div>
          ))}
        </div>
        <div className={`${styles.total}`}>
          <div>Total</div>
          <div>₹ 0.00 /-</div>
        </div>
      </Card>
    </div>
  );
}

export default CartModal;
