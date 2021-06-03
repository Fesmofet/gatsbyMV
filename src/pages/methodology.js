import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const MethodologyPage = ({data}) => {
  const {nodes} = data.allMarkdownRemark;

  return (
  <Layout>
    <Seo title="Page Methodology" />
    <h1>Methodology</h1>
    <div className="posts">
        {nodes.map(post => {
          const {url, title, category, image} = post.frontmatter
          const img = getImage(image);
          return (
            <div key={post.id} className="post">
              <Link to={`/${category}/${url}`} >
                <GatsbyImage alt={title} image={img} />
                <p>{title}</p>
              </Link>
            </div>
          )
        })}
      </div>
  </Layout>
)}

export default MethodologyPage

export const query = graphql`
  query Methodology {
    allMarkdownRemark {
      nodes {
        frontmatter {
          category
          title
          url
          image {
            childImageSharp {
              gatsbyImageData(width: 200, formats: [AUTO, AVIF], placeholder: BLURRED)
            }
          }
       }
       id
     }
    }
  }
`