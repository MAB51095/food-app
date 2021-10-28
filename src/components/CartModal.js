import React from "react";
import { useContext } from "react";
import CartContext from "../context/cart-context";
import Card from "../UI/Card";
import styles from "./CartModal.module.css";

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
      </Card>
    </div>
  );
}

export default CartModal;
