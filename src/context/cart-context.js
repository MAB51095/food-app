import React, { useState } from "react";

const CartContext = React.createContext({
  isCartOpen: false,
  toggleCartOpenHandler: () => {},
});

export default CartContext;

export const CartContextProvider = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartOpenHandler = () => {
    setIsCartOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <CartContext.Provider value={{ isCartOpen, toggleCartOpenHandler }}>
      {props.children}
    </CartContext.Provider>
  );
};
