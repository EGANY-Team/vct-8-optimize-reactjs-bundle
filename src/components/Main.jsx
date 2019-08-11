import React from "react";
import styles from "./Main.module.css";

const Main = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Main;
