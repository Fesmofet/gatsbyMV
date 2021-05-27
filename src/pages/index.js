import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => {
  const {nodes} = data.allMarkdownRemark;
  return(
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />

      <div>
        {nodes.map(post => {
          const {url, title, category} = post.frontmatter
          return <Link to={`/${category}/${url}`} key={post.id}>{title}</Link>
        })}
      </div>
      {/*<p>*/}
      {/*  <Link to="/about/">About</Link> <br />*/}
      {/*  <Link to="/methodology/">Methodology</Link> <br />*/}
      {/*  <Link to="/reviews/">Reviews</Link> <br />*/}
      {/*  <Link to="/products/">Products</Link> <br />*/}
      {/*  <Link to="/contacts/">Contacts</Link> <br />*/}
      {/*  <Link to="/using-typescript/">Go to "Using TypeScript"</Link>*/}
      {/*</p>*/}
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
       }
       id
     }
    }
  }
`
