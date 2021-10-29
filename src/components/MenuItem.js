import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./MenuItem.module.css";
function MenuItem(props) {
  const [quantity, setQuantity] = useState(0);

  const QuantityOnChangeHandler = (e) => {
    setQuantity(e.target.value);
  };

  const QuantityButtonAction = (e) => {
    if (e.target.textContent == "+") {
      setQuantity((qty) => {
        return qty + 1;
      });
    } else {
      if (quantity === 0) return;
      else
        setQuantity((qty) => {
          return qty - 1;
        });
    }
  };

  return (
    <Card key={props.item.id} className={`${styles.menuItem}`}>
      <form className={`${styles.menuItemForm}`}>
        <div className={`${styles.menuItemName}`}>{props.item.name}</div>
        <div
          className={`${styles.menuItemPrice}`}
        >{`Inr ${props.item.price}/-`}</div>

        <div className={`${styles.menuItemQuantity}`}>
          <div
            className={`${styles.menuItemQuantityButton}`}
            onClick={QuantityButtonAction}
          >
            {"-"}
          </div>
          <input type="number" min="0" value={quantity} />
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
