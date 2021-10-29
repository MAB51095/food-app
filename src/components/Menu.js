import React from "react";
import Card from "../UI/Card";
import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";

function Menu() {
  const menuItems = [
    { id: 1, name: "Veg Fried Rice", price: "65" },
    { id: 2, name: "Egg Fried Rice", price: "80" },
    { id: 3, name: "Chicken Fried Rice", price: "100" },
    { id: 4, name: "Veg Noodles Rice", price: "70" },
    { id: 5, name: "Egg Noodles", price: "80" },
    { id: 6, name: "Chicken Noodles", price: "100" },
  ];
  return (
    <Card className={`${styles.menu}`}>
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item}></MenuItem>
      ))}
    </Card>
  );
}

export default Menu;
