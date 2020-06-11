import React, { ReactElement } from "react";
import styles from "../styles/categories.module.css";
import LazyLoad from "react-lazyload";
interface Props {}

export default function Categories({}: Props): ReactElement {
  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.category}>
        <h3 className={styles.textCategory}>LIFE STYLE</h3>
        <img
          className={styles.imgCategory}
          src="/images/life-style.webp"
          alt="life-style"
        />
      </div>
      <div className={styles.category}></div>
      <div className={styles.category}></div>
      <div className={styles.category}></div>
    </div>
  );
}
