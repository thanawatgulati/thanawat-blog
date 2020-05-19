import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  {
    posts: allContentfulPost {
      nodes {
        author {
          name
        }
        title
        thumbnail {
          file {
            url
          }
        }
        slug
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.posts.nodes.map(post => (
      <div key={`post-${post.slug}`}>
        <h2>
          <Link to={`/${post.slug}`}>
            {post.title} ( with : {post.author.name})
          </Link>
        </h2>
        <img src={`https:${post.thumbnail.file.url}`} />
      </div>
    ))}
  </Layout>
)

export default IndexPage
