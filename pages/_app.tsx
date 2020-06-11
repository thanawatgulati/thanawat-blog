import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";
import Navbar from "../components/Navbar";

export default function ({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Blog - Thanawat Gulati</title>
      </Head>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
