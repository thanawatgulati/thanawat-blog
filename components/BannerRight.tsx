import React, { ReactElement } from "react";
import styles from "../styles/bannerRight.module.css";
import LazyLoad from "react-lazyload";
import Link from "next/link";
interface Props {}

export default function BannerRight({}: Props): ReactElement {
  return (
    <Link href="/ttn">
      <div id={styles.bannerRight}>
        <LazyLoad height={"100%"} once={true}>
          <h2 id={styles.TextBannerRight}>
            TECH <br />
            TO NIGHT
          </h2>
          <img
            id={styles.imgBannerRight}
            src="/images/bannerRight.webp"
            alt="banner-left"
          />
        </LazyLoad>
      </div>
    </Link>
  );
}
