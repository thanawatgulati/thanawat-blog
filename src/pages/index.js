import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import CardHead from "../components/CardHead"
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
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
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
    </div>
  </Layout>
)

export default IndexPage
