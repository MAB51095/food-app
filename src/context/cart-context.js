import React, { useState } from "react";

const CartContext = React.createContext({
  isCartOpen: false,
  toggleCartOpenHandler: () => {},
  cartItems: [],
});

export default CartContext;

export const CartContextProvider = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = [
    { id: 1, name: "Veg Fried Rice", price: "65" },
    { id: 2, name: "Egg Fried Rice", price: "80" },
    { id: 3, name: "Chicken Fried Rice", price: "100" },
    { id: 4, name: "Veg Noodles", price: "70" },
    { id: 5, name: "Egg Noodles", price: "80" },
    { id: 6, name: "Chicken Noodles", price: "100" },
    { id: 7, name: "Veg Biriyani", price: "100" },
    { id: 8, name: "Egg Biriyani", price: "110" },
    { id: 9, name: "Chicken Biriyani", price: "140" },
    { id: 10, name: "Mutton Biriyani", price: "180" },
    { id: 11, name: "Fish Biriyani", price: "170" },
    { id: 12, name: "Prawn Biriyani", price: "190" },
    { id: 13, name: "Beef Biriyani", price: "160" },
  ];

  const toggleCartOpenHandler = () => {
    setIsCartOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <CartContext.Provider
      value={{ isCartOpen, toggleCartOpenHandler, cartItems }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
