import React from "react";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={`${styles.header} {props.className}`}>
      <div className={`${styles.brand}`}>
        <h1>Swigato</h1>
      </div>
      <nav className={`${styles.nav}`}>
        <div className={`${styles.navItem}`}>
          <a href="/">About </a>
        </div>
        <div className={`${styles.navItem}`}>
          <a href="/">Cart </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
