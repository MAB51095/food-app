import React from "react";
import { useContext } from "react";
import { createPortal } from "react-dom";
import CartContext from "../context/cart-context";
import CartModal from "./CartModal";
import styles from "./Header.module.css";

function Header(props) {
  const ctxCart = useContext(CartContext);
  return (
    <>
      {createPortal(<CartModal />, document.getElementById("modal"))}
      <header className={`${styles.header} ${props.className}`}>
        <div className={`${styles.brand}`}>
          <h1>Swigato</h1>
        </div>
        <nav className={`${styles.nav}`}>
          <div
            className={`${styles.navItem} ${
              ctxCart.isCartOpen && styles.active
            }`}
          >
            <div onClick={ctxCart.toggleCartOpenHandler}>Cart </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
