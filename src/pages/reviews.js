import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ReviewsPage = () => (
  <Layout>
    <Seo title="Page Reviews" />
    <h1>Reviews</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ReviewsPage