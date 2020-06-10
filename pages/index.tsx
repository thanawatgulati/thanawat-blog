import React, { ReactElement } from "react";
import BannerLeft from "../components/BannerLeft";
import BannerRight from "../components/BannerRight";
import styles from "../styles/index.module.css";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div>
      <div className={styles.containerBanner}>
        <BannerLeft />
        <BannerRight />
      </div>
    </div>
  );
}
