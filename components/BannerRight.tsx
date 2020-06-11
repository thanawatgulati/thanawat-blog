import React, { ReactElement } from "react";
import styles from "../styles/bannerRight.module.css";
import LazyLoad from "react-lazyload";
interface Props {}

export default function BannerRight({}: Props): ReactElement {
  return (
    <div className={styles.bannerRight}>
      <LazyLoad height={"100%"} once={true}>
        <h2 className={styles.TextBannerRight}>
          TECH <br />
          TO NIGHT
        </h2>
        <img
          className={styles.imgBannerRight}
          src="/images/bannerRight.webp"
          alt="banner-left"
        />
      </LazyLoad>
    </div>
  );
}
