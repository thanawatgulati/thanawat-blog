import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Card from "../components/Card"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  {
    posts: allContentfulPost {
      nodes {
        author {
          name
        }
        title
        thumbnail {
          fluid(maxWidth: 400) {
            ...GatsbyContentfulFluid
          }
        }
        slug
        description {
          json
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.posts.nodes.map(post => (
      <div key={`post-${post.slug}`}>
        {/* <h2>
          <Link to={`/${post.slug}`}>
            {post.title} ( with : {post.author.name})
          </Link>
        </h2>
        <Image fluid={post.thumbnail.fluid} /> */}
        <Card
          title={post.slug}
          image={post.thumbnail.fluid.src}
          description={documentToReactComponents(post.description.json)}
        />
      </div>
    ))}
  </Layout>
)

export default IndexPage
