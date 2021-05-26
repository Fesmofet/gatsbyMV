import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactsPage = () => (
  <Layout>
    <Seo title="Page Contacts" />
    <h1>Contacts</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactsPage