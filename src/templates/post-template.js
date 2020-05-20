import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import SEO from "../components/seo"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      author {
        name
        twitter
      }
      title
      slug
      seo {
        title
        description {
          description
        }
      }
      content {
        json
      }
      description {
        json
      }
    }
  }
`

const PostTemplate = ({ data: { post } }) => (
  <Layout>
    <SEO title={post.title} />
    <div>
      <h1>{post.title}</h1>
      <div>{documentToReactComponents(post.description.json)}</div>
      <div>
        {documentToReactComponents(post.content.json, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => (
              <img
                src={`${node.data.target.fields.file["en-US"].url}?w=300&q=90`}
                alt={node.data.target.fields.title["en-US"]}
              />
            ),
          },
        })}
      </div>
    </div>
  </Layout>
)

export default PostTemplate
