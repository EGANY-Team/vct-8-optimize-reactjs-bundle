import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome, faGrinTears } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faGrinTears } from "@fortawesome/free-solid-svg-icons/faGrinTears";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink
        className={styles.navbarItem}
        activeClassName={styles.navbarItemActive}
        to="/"
        exact={true}
      >
        <FontAwesomeIcon icon={faHome} /> Giới thiệu
      </NavLink>
      <NavLink
        className={styles.navbarItem}
        activeClassName={styles.navbarItemActive}
        to="/cowsay"
      >
        <FontAwesomeIcon icon={faGrinTears} /> Cowsay
      </NavLink>
    </div>
  );
};

export default NavBar;
