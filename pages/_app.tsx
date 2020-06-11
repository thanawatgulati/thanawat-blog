import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";

export default function ({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Blog - Thanawat Gulati</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
