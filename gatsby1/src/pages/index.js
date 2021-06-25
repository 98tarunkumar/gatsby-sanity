import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
export const query = graphql`
  {
    allSanityProjects {
      edges {
        node {
          name
          description
          slug {
            current
          }
          image {
            asset {
              url
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1 style={{ margin: "0 auto", textAlign: "center" }}>Portfolio</h1>
    <article
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {data.allSanityProjects.edges.map(({ node: project }) => (
        <article
          key={project.slug.current}
          style={{ flex: "1 45%", maxWidth: "45%", margin: "1rem" }}
        >
          <h2 style={{ fontSize: "24px" }}>
           <Link to={project.slug.current} >{project.name} </Link> </h2> 
          <GatsbyImage image={project.image.asset.gatsbyImageData} />
          <p style={{ marginTop: "0.5rem" }}>{project.description}</p>
          <Link to={project.slug.current}>See details</Link>
        </article>
      ))}
    </article>
  </Layout>
)

export default IndexPage
