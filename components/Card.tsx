import React, { ReactElement } from "react";
import styles from "../styles/card.module.css";
import LazyLoad from "react-lazyload";

interface Props {}

export default function Card({}: Props): ReactElement {
  return (
    <div className={styles.card}>
      <div className={styles.TextCard}>
        <h4 className={styles.titleCard}>Lorem ipsum</h4>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          deserunt rerum fugiat sit?
        </span>
      </div>
      <LazyLoad height={"100%"} offset={100}>
        <img className={styles.imgCard} src="/images/card.webp" alt="card" />
      </LazyLoad>
    </div>
  );
}
