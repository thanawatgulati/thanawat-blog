import { AppProps } from "next/app";
import Navbar from "../components/Navbar";

export default function ({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
