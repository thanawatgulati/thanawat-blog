import Prismic from "prismic-javascript";
require("dotenv").config();

export const apiEndpoint = "https://thanawatgulati-blog.cdn.prismic.io/api/v2";
export const accessToken = process.env.access_token;

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
