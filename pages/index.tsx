import React, { ReactElement } from "react";
import BannerLeft from "../components/BannerLeft";
import BannerRight from "../components/BannerRight";
import styles from "../styles/index.module.css";
import Card from "../components/Card";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div>
      <div className={styles.containerBanner}>
        <BannerLeft />
        <BannerRight />
      </div>
      <div className={styles.containerCard}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
