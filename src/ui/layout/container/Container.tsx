import styles from "./Container.module.css";
import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
