import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => {
  const {nodes} = data.allMarkdownRemark;

  return(
    <Layout>
      <Seo title="Home" />

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
  )
}

export default IndexPage

export const query = graphql`
  query MainPage {
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
