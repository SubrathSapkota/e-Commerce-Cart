import React from "react";
import styles from "./navgaition.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const count = useSelector((state) => state.Addtocart.counter);
  return (
    <div className={styles.navbar}>
      <div className={styles.logoDiv}>
        <h1>SHOP NOW</h1>
      </div>

      <div className={styles.navDiv}>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="contact" className={styles.navLink}>
          Contact
        </NavLink>
      </div>

      <div className={styles.btnDiv}>
        <NavLink to="cart">
          <button className={styles.navBtn}>
            <span>{count} </span>
            Cart
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
