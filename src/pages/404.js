import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

import Giphy from "../images/giphy.gif"

const Image = styled.img`
    margin: 0;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 | NOT FOUND</h1>
    <Image src={Giphy}/>
  </Layout>
)

export default NotFoundPage
