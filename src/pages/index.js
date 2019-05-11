import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>
      Welcome to coc.dev! This is under construction: here, you'll find
      resources on the use of codes of conduct in software development and
      community organisation.
    </p>
  </Layout>
)

export default IndexPage
