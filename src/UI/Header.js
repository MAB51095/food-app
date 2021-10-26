import React from "react";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={`${styles.header} {props.className}`}>
      <div className={`${styles.brand}`}>
        <h1>Swigato</h1>
      </div>
      <nav className={`${styles.nav}`}>
        <div className={`${styles.navItem}`}>Cart </div>
        <div className={`${styles.navItem}`}>About</div>
      </nav>
    </header>
  );
}

export default Header;
