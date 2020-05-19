import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  {
    posts: allContentfulPost {
      nodes {
        author {
          name
        }
        title
        thumbnail {
          fluid {
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
    <div className="flex-row">
      {data.posts.nodes.map(post => (
        <Card
          key={`post-${post.slug}`}
          slug={post.slug}
          title={post.title}
          image={post.thumbnail.fluid}
          description={documentToReactComponents(post.description.json)}
        />
      ))}
    </div>
  </Layout>
)

export default IndexPage
