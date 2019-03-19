import React from "react"
import Layout from "../components/layout"

const Post = ({
  data: {
    wordpressPost: { title, content },
  },
}) => {
  return (
    <Layout>
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      slug
      content
    }
  }
`

export default Post
