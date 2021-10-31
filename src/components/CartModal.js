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
      <Card className={`${styles.overlay}`}>
        <div className={`${styles.close}`} onClick={closeCart}>
          X
        </div>
        <div className={`${styles.cartHeading}`}>Order Invoice - Preview</div>
        <div className={`${styles.cartItems}`}>
          {ctxCart.cartItems.map((item) => (
            <div>{item.name}</div>
          ))}
          {ctxCart.cartItems.map((item) => (
            <div>{item.name}</div>
          ))}
          {ctxCart.cartItems.map((item) => (
            <div>{item.name}</div>
          ))}
          {ctxCart.cartItems.map((item) => (
            <div>{item.name}</div>
          ))}
          {ctxCart.cartItems.map((item) => (
            <div>{item.name}</div>
          ))}
          {ctxCart.cartItems.map((item) => (
            <div>{item.name}</div>
          ))}
          {ctxCart.cartItems.map((item) => (
            <div>{item.name}</div>
          ))}
          {ctxCart.cartItems.map((item) => (
            <div>{item.name}</div>
          ))}
          {ctxCart.cartItems.map((item) => (
            <div>{item.name}</div>
          ))}
          {ctxCart.cartItems.map((item) => (
            <div>{item.name}</div>
          ))}
          {ctxCart.cartItems.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
        <div className={`${styles.total}`}>
          <div>Total</div>
          <div>Inr 0.00 /-</div>
        </div>
      </Card>
    </div>
  );
}

export default CartModal;
