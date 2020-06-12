import React, { ReactElement } from "react";
import BannerLeft from "../components/BannerLeft";
import BannerRight from "../components/BannerRight";
import styles from "../styles/index.module.css";
import Card from "../components/Card";
import Categories from "../components/Categories";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function index({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>): ReactElement {
  return (
    <div>
      {console.log(post)}
      <div className={styles.containerBanner}>
        <BannerLeft />
        <BannerRight />
      </div>
      <div className={styles.containerCard}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Categories />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://thanawatgulati-blog.cdn.prismic.io/api/v1");
  const data = await res.json();
  return { props: { post: data } };
};
