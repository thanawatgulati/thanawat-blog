import React, { ReactElement } from "react";
import styles from "../styles/bannerLeft.module.css";
import LazyLoad from "react-lazyload";
interface Props {}

export default function BannerLeft({}: Props): ReactElement {
  return (
    <div className={styles.bannerLeft}>
      <LazyLoad height={10} offset={10}>
        <img
          className={styles.imgBannerLeft}
          src="/images/bannerLeft.jpg"
          alt="banner-left"
        />
      </LazyLoad>
    </div>
  );
}
