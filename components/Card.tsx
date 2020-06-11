import React, { ReactElement } from "react";
import styles from "../styles/card.module.css";

interface Props {}

export default function Card({}: Props): ReactElement {
  return <div className={styles.card}></div>;
}
