import React, { useState, useContext } from "react";
import CartContext from "../context/cart-context";
import Card from "../UI/Card";
import styles from "./MenuItem.module.css";

function MenuItem(props) {
  const ctxCart = useContext(CartContext);

  const CartItemHandler = (cartItem) => {
    ctxCart.AddToCart(cartItem);
  };

  const [quantity, setQuantity] = useState(0);

  const QuantityButtonAction = (e) => {
    let cartItem = { ...props.item };

    if (e.target.textContent == "+") {
      setQuantity((qty) => {
        return qty + 1;
      });
      cartItem = { ...cartItem, quantity: quantity + 1 };
    } else {
      if (quantity === 0) {
        cartItem = { ...cartItem, quantity: 0 };
      } else {
        setQuantity((qty) => {
          return qty - 1;
        });
        cartItem = { ...cartItem, quantity: quantity - 1 };
      }
    }

    CartItemHandler(cartItem);
  };

  return (
    <Card key={props.item.id} className={`${styles.menuItem}`}>
      <form className={`${styles.menuItemForm}`}>
        <div className={`${styles.menuItemName}`}>{props.item.name}</div>
        <div
          className={`${styles.menuItemPrice}`}
        >{`₹ ${props.item.price}/-`}</div>

        <div className={`${styles.menuItemQuantity}`}>
          <div
            className={`${styles.menuItemQuantityButton}`}
            onClick={QuantityButtonAction}
          >
            {"-"}
          </div>
          <input type="number" min="0" value={quantity} onChange={() => {}} />
          <div
            className={`${styles.menuItemQuantityButton}`}
            onClick={QuantityButtonAction}
          >
            {"+"}
          </div>
        </div>
      </form>
    </Card>
  );
}

export default MenuItem;
