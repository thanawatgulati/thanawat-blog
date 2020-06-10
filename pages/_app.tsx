import { AppProps } from "next/app";
import Navbar from "../components/Navbar";

export default function ({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <div style={{ width: "80%", margin: "auto" }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
