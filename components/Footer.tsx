import React, { ReactElement } from "react";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <div
      style={{
        color: "#fff",
        backgroundColor: "#A43131",
        textAlign: "center",
        padding: "20px",
        marginTop: "30px",
        borderRadius: "10px 10px 0px 0px",
      }}
    >
      &copy; Copyright {new Date().getFullYear()} | Thanawat Gulati
    </div>
  );
}
