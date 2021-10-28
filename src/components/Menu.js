import React from "react";
import Card from "../UI/Card";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <Card className={`${styles.menu}`}>
      <Card>Hello</Card>;<Card>Hello</Card>;<Card>Hello</Card>;
      <Card>Hello</Card>;<Card>Hello</Card>;<Card>Hello</Card>;
      <Card>Hello</Card>;<Card>Hello</Card>;<Card>Hello</Card>;
    </Card>
  );
}

export default Menu;
