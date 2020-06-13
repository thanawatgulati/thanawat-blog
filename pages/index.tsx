import React, { ReactElement } from "react";
import BannerLeft from "../components/BannerLeft";
import BannerRight from "../components/BannerRight";
import styles from "../styles/index.module.css";
import Card from "../components/Card";
import Categories from "../components/Categories";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
// import { gql } from "apollo-boost";
// import { client } from "../graphql";

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
        {/* {post.map((r) => console.log(r))} */}
      </div>
      <Categories />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const res = await client.query({
  //   query: gql`
  //     {
  //       allPost {
  //         _id
  //       }
  //     }
  //   `,
  // });
  return { props: { post: "" } };
};
