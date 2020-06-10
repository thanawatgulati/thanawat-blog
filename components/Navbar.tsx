import React, { ReactElement } from "react";
import styles from "../styles/navbar.module.css";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  return (
    <div className={styles.navigation}>
      <a href="">HOME</a>
      <a href="">CATEGORY</a>
      <a href="">AboutME</a>
    </div>
  );
}
