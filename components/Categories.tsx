import React, { ReactElement } from "react";
import styles from "../styles/categories.module.css";
import LazyLoad from "react-lazyload";
interface Props {}

export default function Categories({}: Props): ReactElement {
  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.category}>
        <h3 className={styles.textCategory}>LIFE STYLE</h3>
        <LazyLoad offset={100} heigth={"100%"}>
          <img
            className={styles.imgCategory}
            src="/images/life-style.webp"
            alt="life-style"
          />
        </LazyLoad>
      </div>
      <div className={styles.category}>
        <h3 className={styles.textCategory}>TECHNOLOGY</h3>
        <LazyLoad offset={100} heigth={"100%"}>
          <img
            className={styles.imgCategory}
            src="/images/technology.webp"
            alt="technology"
          />
        </LazyLoad>
      </div>
      <div className={styles.category}>
        <h3 className={styles.textCategory}>Review</h3>
        <LazyLoad offset={100} heigth={"100%"}>
          <img
            className={styles.imgCategory}
            src="/images/review.webp"
            alt="review"
          />
        </LazyLoad>
      </div>
      <div className={styles.category}>
        <h3 className={styles.textCategory}>Programming</h3>
        <LazyLoad offset={100} heigth={"100%"}>
          <img
            className={styles.imgCategory}
            src="/images/programming.webp"
            alt="programming"
          />
        </LazyLoad>
      </div>
    </div>
  );
}
