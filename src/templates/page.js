import React from "react"
import Layout from "../components/layout"

const Page = ({
  data: {
    wordpressPage: { title, content },
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
  query PageQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
    }
  }
`

export default Page
