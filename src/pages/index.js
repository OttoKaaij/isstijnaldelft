import React from "react"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <div className="main" style={{ display: "flex", flexDirection: "column" }}>
      Website hier, Tijs, ga bouwen.
      <Img
        style={{ marginTop: "1em" }}
        fixed={data.file.childImageSharp.fixed}
      />
    </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "image.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 485, height: 760) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
