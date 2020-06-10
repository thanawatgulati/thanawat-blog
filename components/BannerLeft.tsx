import React, { ReactElement } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "../styles/bannerLeft.module.css";
interface Props {}

export default function BannerLeft({}: Props): ReactElement {
  return (
    <div className={styles.bannerLeft}>
      <LazyLoadImage
        className={styles.imgBannerLeft}
        src="/images/bannerLeft.jpg"
        alt="banner-left"
        effect="blur"
      />
    </div>
  );
}
