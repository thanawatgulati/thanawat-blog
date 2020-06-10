import React, { ReactElement } from "react";
import stlyes from "../styles/bannerRight.module.css";
interface Props {}

export default function BannerRight({}: Props): ReactElement {
  return <div className={stlyes.bannerRight}></div>;
}
