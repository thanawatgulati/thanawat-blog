import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";

export default function ({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Blog - Thanawat Gulati</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div style={{ width: "80%", margin: "auto" }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
