import React, { useState } from "react";

const CartContext = React.createContext({
  isCartOpen: false,
  toggleCartOpenHandler: () => {},
  cartItems: [],
  AddToCart: (cartItem) => {},
});

export default CartContext;

export const CartContextProvider = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const AddToCart = (cartItem) => {
    var itemsInCart = cartItems;

    var i = itemsInCart.findIndex((item) => item.id === cartItem.id);

    if (i === -1) {
      itemsInCart.push(cartItem);
    } else {
      itemsInCart[i] = { ...itemsInCart[i], quantity: cartItem.quantity };
    }

    setCartItems(itemsInCart.filter((item) => item.quantity !== 0));
  };

  const toggleCartOpenHandler = () => {
    setIsCartOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <CartContext.Provider
      value={{ isCartOpen, toggleCartOpenHandler, cartItems, AddToCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
