import React from "react";
import { useContext } from "react";
import CartContext from "../context/cart-context";
import Card from "../UI/Card";
import styles from "./CartModal.module.css";
import MenuItem from "./MenuItem";

function CartModal(props) {
  const ctxCart = useContext(CartContext);

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
        {ctxCart.cartItems.length <= 0 && (
          <div className={`${styles.cartItems}`}>
            There are no items in Cart
          </div>
        )}
        {ctxCart.cartItems.length > 0 && (
          <div className={`${styles.cartItems}`}>
            <div className={`${styles.cartItem} ${styles.cartItemHeading}`}>
              <div>Name</div>
              <div>Price</div>
              <div>Qty</div>
              <div className={`${styles.cartItemAmount}`}>Amount</div>
            </div>

            {ctxCart.cartItems.map((item, id) => (
              <div className={`${styles.cartItem}`} key={item.id}>
                <div>{item.name}</div>
                <div>₹ {item.price}/- </div>
                <div> x{item.quantity}</div>
                <div className={`${styles.cartItemAmount}`}>
                  {(item.price * item.quantity).toFixed(2)} /-
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={`${styles.total}`}>
          <div>Total</div>
          <div>
            {`₹ ${ctxCart.cartItems
              .reduce((total, item) => {
                return total + item.price * item.quantity;
              }, 0)
              .toFixed(2)}/-`}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CartModal;
