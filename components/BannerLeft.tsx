import React, { ReactElement } from "react";
import styles from "../styles/bannerLeft.module.css";
import LazyLoad from "react-lazyload";
interface Props {}

export default function BannerLeft({}: Props): ReactElement {
  return (
    <div className={styles.bannerLeft}>
      <h1 className={styles.TextBannerLeft}>
        Web Frontend <br /> Developer <br />
        2020
      </h1>
      <LazyLoad height={"100%"} once={true}>
        <img
          className={styles.imgBannerLeft}
          src="/images/bannerLeft.webp"
          alt="banner-left"
        />
      </LazyLoad>
    </div>
  );
}
