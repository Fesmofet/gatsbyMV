import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const MethodologyPage = () => (
  <Layout>
    <Seo title="Page Methodology" />
    <h1>Methodology</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MethodologyPage