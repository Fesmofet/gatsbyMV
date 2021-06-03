import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactsPage = () => (
  <Layout>
    <Seo title="Page Contacts" />
    <h1>Contacts</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.175527595695!2d36.22947841556014!3d49.98931852836484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0f13c7dcea7%3A0xaa2d7205072c79aa!2sKvitky-Osnov&#39;yanenka%20St%2C%2013%2C%20Kharkiv%2C%20Kharkivs&#39;ka%20oblast%2C%2061000!5e0!3m2!1sen!2sua!4v1622748424613!5m2!1sen!2sua" width="800" height="600"  allowfullscreen="" loading="lazy"></iframe>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactsPage