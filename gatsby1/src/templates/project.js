import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const query = graphql`
  query($slug: String) {
    sanityProjects(slug: { current: { eq: $slug } }) {
      name
      description
      image {
        asset {
          url
          gatsbyImageData
        }
      }
    }
  }
`
export default ({ data }) => (
  <Layout>
    <GatsbyImage
      image={data.sanityProjects.image.asset.gatsbyImageData}
      alt={data.sanityProjects.name}
    />
    <h1>{data.sanityProjects.name}</h1>
    <p>{data.sanityProjects.description}</p>
    <Link to="/">Home</Link>
  </Layout>
)
