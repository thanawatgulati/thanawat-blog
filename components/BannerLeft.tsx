import React, { ReactElement } from "react";
import styles from "../styles/bannerLeft.module.css";
interface Props {}

export default function BannerLeft({}: Props): ReactElement {
  return <div className={styles.bannerLeft}></div>;
}
