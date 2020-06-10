import React, { ReactElement } from "react";
import BannerLeft from "../components/BannerLeft";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div>
      Hello World
      <BannerLeft />
    </div>
  );
}
